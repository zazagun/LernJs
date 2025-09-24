const dotenv = require("dotenv").config({
    path: "./nodeJsLern/DBwork/.env",
    debug: false,
})
const mongoose = require("mongoose")
const express = require("express")
const PORT = process.env.PORT || 1560

const app = express()
const uri = `mongodb+srv://${process.env.DB_USER}:<${process.env.DB_PASSWORD}>@cluster0.ptnrvcq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"`


mongoose.connect(uri)
 .then(() => console.log("Connected to MongoDB!"))
 .catch((err) => console.error("MongoDB connection error:", err.name))


 app.listen(PORT, () => {
    console.log(`Server run on localhost:${PORT}`)
 })