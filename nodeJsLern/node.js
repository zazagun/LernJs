const dotenv = require("dotenv").config({
    path: "./nodeJsLern/.env", 
    debug: false,
})




console.log(process.env.PORT)
console.log(process.pid)