const http = require("http")
const { url } = require("inspector")
const { couldStartTrivia, createTypeReferenceDirectiveResolutionCache } = require("typescript")
const dotenv = require("dotenv").config({
    path: "./nodeJsLern/.env", 
    debug: false,
})

const PORT = process.env.PORT || 3500

class Router{
    constructor(){
        
    }
}

const server = http.createServer((req,res)=>{
    res.end(req,url)
})

server.listen(PORT, ()=>{
    console.log("server start on port:" + PORT)
})