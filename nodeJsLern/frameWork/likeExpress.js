const http = require("http")
const eventEmitter = require("events")
const fs = require("fs")
const Router = require("./router")
const dotenv = require("dotenv").config({
    path: "./nodeJsLern/.env",
    debug: false,
})

const PORT = process.env.PORT || 3500
const emitter = new eventEmitter()
const router = new Router()

router.get("/users", (req, res) => {
    res.end("You sent a request to /users")
});

router.get("/posts", (req, res) => {
    res.end("You sent a request to /posts")
});

const server = http.createServer((req, res) => {
    const { method, url: reqUrl } = req
    const parsedUrl = new URL(reqUrl, `http://${req.headers.host}`)
    const path = parsedUrl.pathname

    const endpoint = router.endpoints[path]
    if (endpoint && endpoint[method]) {
        endpoint[method](req, res)
    }else{
        const data = fs.readFileSync(__dirname + "/error.html", "utf8")
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(data)

        // res.end(`"${parsedUrl}" NOT SUPPORTED`)
    }
});

server.listen(PORT, () => {
    console.log("Server started on port: " + PORT)
    console.log(`http://localhost:${PORT}`)
});
