const express = require("express")
const QuizSchema = require("../module/QuizQunSchema")
const Quiz = express()
Quiz.use(express.json())

Quiz.get("/quiz/:id",(req,res)=>{
    QuizSchema.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = Quiz