const express = require("express")
const app = express()



const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
    res.end("<style>html { background: black; color: white; }</style>"
         + "hello <b>nodeJS</b>")
})

const PORT = 4000
const HOST = 'localhost'

server.listen(PORT || 3000, HOST, ()=>{
    console.log("сервер запущен на http://" + HOST + ":" + PORT)
})