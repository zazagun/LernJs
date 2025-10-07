const dotenv = require("dotenv").config({
    path: "./nodeJsLern/DBwork/.env",
    debug: false,
    quiet: true
})
const cors = require("cors");
const mongoose = require("mongoose")
const express = require("express")
const PORT = process.env.PORT || 1560

const app = express()
app.use(cors())
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ptnrvcq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


mongoose.connect(uri)
 .then(() => console.log("Connected to MongoDB!"))
 .catch((err) => console.error("MongoDB connection error:", err))


const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    secondName:{type: String, required: true}
})

const User = mongoose.model("User", userSchema)

app.use(express.json())

//роут post
app.post('/users', async(req,res)=>{
    try{
        const {name, secondName} = req.body
        const newUser = new User({name, secondName})
        await newUser.save()
        res.status(201).json(newUser)
    } catch(err){
        res.status(500).json({error: err.name})
    }
})

//роут get
app.get('/users', async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    } catch(error){
        res.status(500).json({error: err.name})
    }
})


app.listen(PORT, () => {
    console.log(`Server run on localhost:${PORT}`)
 })