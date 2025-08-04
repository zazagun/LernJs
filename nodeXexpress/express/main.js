const express = require('express')
const app = express()
const PORT = 4500 || 2000

app.get('/', (req, res)=> {
    res.sendFile(__dirname + "index.html")
})

app.get('/user/:name/:id', (req, res)=> {
    res.send(`User ID: ${req.params.id}. User name: ${req.params.name}`)
})

app.listen(4500, ()=>{
    console.log(`workaet na localhost:${PORT}`)
})