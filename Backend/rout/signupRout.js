const express = require("express")
const multer = require("multer") ;
const signup = express()
const upload = multer();        // Configure multer to handle FormData
const connector = require("../cannectors/mongoDB")
const signupSchema = require("../module/SignUpSchema")
const bcrypt = require('bcrypt'); 
const cors = require("cors")


signup.use(cors());
signup.use(express.json());     // Parse JSON bodies
signup.use(express.urlencoded({ extended: true }));

signup.post("/signup", upload.none(), async(req, res) => {
        try{
            const user = await signupSchema.findOne({Email: req.body.Email});
            if (user) {
                res.status(400).send("Email already exists");
                return;
            }
            else{
                const hashPassword = await bcrypt.hash(req.body.Password,10);
                req.body.Password = hashPassword
                signupSchema.create(req.body)
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    console.error("Error:", err);
                    res.status(500).send("Internal Server Error");
                });
            }
        
        }
        catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
    }
   
);

module.exports = signup