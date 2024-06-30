const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json()); 
const port =300
const mongoose = require("../cannectors/mongoDB")
const singupSchema = require("../module/SignUpSchema")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

app.post("/app", async(req, res) => { 
    // console.log("FormData:", req.body);
    const user = await singupSchema.findOne({"Email":req.body.Email})
    try {
            bcrypt.compare(req.body.Password, user.Password, function(err, result) {
                if(result){
                    payload={Email : req.body.Email}
                    SECRET_KEY="JWT_TOKEN"
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});