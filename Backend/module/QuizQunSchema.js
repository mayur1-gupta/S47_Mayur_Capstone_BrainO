const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    Count : String,
    Question : String, 
    OptionA : String,
    OptionB : String,
    OptionC : String,
    OptionD : String,
    Answer : String,
    Status : String
    
})
   

const QuizQun = new mongoose.model("QuizQun-1",schema)

module.exports = QuizQun

