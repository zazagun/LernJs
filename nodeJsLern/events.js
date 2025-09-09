const dotenv = require("dotenv").config({
    path: "./nodeJsLern/.env", 
    debug: false,
})
const events = require("events")
const emitter = new events()

emitter.on("message", (data, some)=>{
    console.log(`полученные данные ${data}`)
    console.log(`второе значение ${some}`)
})

const MESSAGE = process.env.data || ""
const SECMESSAGE = process.env.SECDATA || ""


if(MESSAGE){
    emitter.emit("message", MESSAGE, SECMESSAGE)
}else{
    emitter.emit("message", SECMESSAGE)
}