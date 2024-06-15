const express = require("express")
const QuestionList = express()
const connector = require("../cannectors/mongoDB")
const QuestionListSchema = require("../module/CreateQunSchema");
QuestionList.use(express.json())


QuestionList.get("/qunList", (req, res) => {
    QuestionListSchema.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send("Error fetching users:", err);
        });
})

module.exports = QuestionList