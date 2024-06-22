const express = require("express")
const home = express()
home.use(express.json())
const authenticateToken = require('../middleware/authMiddleware');

home.get("/home/:id",authenticateToken,(req,res)=>{
    res.send("Home Page")
})

module.exports = home

