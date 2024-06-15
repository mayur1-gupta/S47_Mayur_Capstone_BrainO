const express = require("express")
const MCQResult = express()
MCQResult.use(express.json())
const mongoose = require("../cannectors/mongoDB")
const MCQResultSchema = require("../module/MCQResultSchema")


MCQResult.post("/result", (req, res) => {
        MCQResultSchema.create(req.body)
        .then((data) => {
            res.send(data);
            console.log(req.body);
        })
        .catch((err) => {
            console.error("Error:", err);
            res.status(500).send("Internal Server Error");
        })    
})

module.exports = MCQResult