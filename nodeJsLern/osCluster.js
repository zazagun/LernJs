const dotenv = require("dotenv").config({
    path: "./nodeJsLern/.env", 
    debug: false,
})
const os = require("os")
const cluster = require("cluster")

if(cluster.isMaster){
    for(let i = 0; i < os.cpus().length -2; i++){
        cluster.fork()
    }
    cluster.on('exit', (worker)=>{
        console.log(`воркер с pid = ${worker.process.pid} умер`)
        cluster.fork()
    })
}else{
    console.log(`pid: ${process.pid}`)

    setInterval(()=>{
        console.log(`процесс pid: ${process.pid} еще работает`)
    }, 3000)
}



console.log(os.platform())//вывод названия ос
// console.log(os.cpus())
console.log(os.cpus().length) //количество потоков
// console.log(os.arch())//архитектура

console.log(process.env.PORT)
console.log(process.pid)