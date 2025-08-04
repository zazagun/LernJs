const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})

    if(req.url == "/"){
        fs.createReadStream('./temps/index.html').pipe(res)
    }else if(req.url == "/time"){
        fs.createReadStream('./temps/time.html').pipe(res)
    }else{
        fs.createReadStream('./temps/error.html').pipe(res)
    }
})

const PORT = 4000
const HOST = 'localhost'

server.listen(PORT || 3000, HOST, ()=>{
    console.log("сервер запущен на http://" + HOST + ":" + PORT)
})