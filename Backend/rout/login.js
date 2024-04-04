const express = require("express")
const login = express()
login.use(express.json())
const mongoose = require("../cannectors/mongoDB")
const singupSchema = require("../module/SignUpSchema")
const bcrypt = require('bcrypt');

login.post("/login", async(req, res) => { 
    // console.log("FormData:", req.body);
    const user = await singupSchema.findOne({"Email":req.body.Email})
    try {
            bcrypt.compare(req.body.Password, user.Password, function(err, result) {
                if(result){
                    res.json({data:user})
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