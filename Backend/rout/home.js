const express = require("express")
const home = express()
home.use(express.json())

home.get("/home/:id" ,(req,res)=>{
    res.send("Home Page")
})

module.exports = home

//extra command
