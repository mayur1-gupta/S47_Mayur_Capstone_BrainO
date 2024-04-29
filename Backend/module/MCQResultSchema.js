const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    Email : String,
    Score: Number,
    TotalQun: Number,
    correctAnswers: Number,
    wrongAnswers: Number     
})

const MCQResult = new mongoose.model("MCQResult",schema)

module.exports = MCQResult