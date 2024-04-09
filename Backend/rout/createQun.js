const express = require("express")
const multer = require("multer");
const upload = multer();
const CreateQun = express()
CreateQun.use(express.json())
const mongoose = require("../cannectors/mongoDB")
const CreateQunschema = require("../module/CreateQunSchema")


CreateQun.post("/createQun",upload.none() ,(req,res) =>{

    CreateQunschema.create(req.body)
    .then((data) => {
        res.send(data);
        console.log(req.body);
    })
    .catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    });
})


module.exports = CreateQun