const express = require("express")
const login = express()
login.use(express.json())
const mongoose = require("../cannectors/mongoDB")
const singupSchema = require("../module/SignUpSchema")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


login.post("/login", async(req, res) => { 
    // console.log("FormData:", req.body);
    const user = await singupSchema.findOne({"Email":req.body.Email})
    try {
            bcrypt.compare(req.body.Password, user.Password, function(err, result) {
                if(result){
                    payload={Email : req.body.Email}
                    SECRET_KEY=process.env.SECRET_KEY
                    const token = jwt.sign(payload,SECRET_KEY,{expiresIn : "48h"})
                    console.log(token);
                    res.json({data:user,token})
                }
                else{
                    res.send("Login failed")
                }
            })
                
        } 
    catch (error) {   
        console.log(error)
        res.send("Login failed")
    }
}
)

module.exports = login