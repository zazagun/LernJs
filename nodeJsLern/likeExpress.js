const http = require("http")
const eventEmitter = require("events")
const url = require("inspector")
const dotenv = require("dotenv").config({
    path: "./nodeJsLern/.env", 
    debug: false,
})

const PORT = process.env.PORT || 3500

const emitter = new eventEmitter

class Router{
    constructor(){
        this.endpoints = {
            // '/user':{
            //     "GET": some(),
            //     "POST": some2(),
            //     "DELETE": some3()
            // }
        }
    }

    requiest(method = "GET", path, handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path]

        if(endpoint[method]){
            throw new Error(`${method} по адресу ${path} уже существует`)
        }

        endpoint[method] = handler

        emitter.on(`[${path}]:[${method}]`, (req, res)=>{
            handler(req,res)
        })
    }

    get(path, handler){
        this.requiest("GET", path, handler)
    }
    post(path, handler){
        this.requiest("POST", path, handler)
    }
    put(path, handler){
        this.requiest("PUT", path, handler)
    }
    delete(path, handler){
        this.requiest("DELETE", path, handler)
    }
}

const router = new Router

router.get("/users", (req,res)=>{
    res.end("u seed request to /esers")
})
router.get("/posts", (req,res)=>{
    res.end("u seed request to /posts")
})


const server = http.createServer((req,res)=>{
    emitter.emit(`[${req.path}]:[${req.method}]`, req, res )
    res.end(req,url)
})

server.listen(PORT, () => {
    console.log("server start on port:" + PORT)
    console.log(`http://localhost:${PORT}`)
})
