const express = require("express")
const QuestionList = express()
const connector = require("../cannectors/mongoDB")
const QuestionListSchema = require("../module/CreateQunSchema");
QuestionList.use(express.json())


QuestionList.get("/yourQun/:email", (req, res) => {
    const {email} = req.params
    QuestionListSchema.find({Email : email})
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send("Error fetching users:", err);
        });
})

module.exports = QuestionList