const express = require("express")
const multer = require("multer") ;
const signup = express()
const upload = multer();        // Configure multer to handle FormData
const connector = require("../cannectors/mongoDB")
const signupSchema = require("../module/SignUpSchema") 

signup.use(express.json());     // Parse JSON bodies
signup.use(express.urlencoded({ extended: true }));

signup.post("/signup", upload.none(), (req, res) => {
    console.log("FormData:", req.body);
    // console.log(req.body)
    signupSchema.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.error("Error:", err);
            res.status(500).send("Internal Server Error");
        });
});

module.exports = signup