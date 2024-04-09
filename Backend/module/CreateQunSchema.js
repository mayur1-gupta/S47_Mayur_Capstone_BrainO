const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Question: {
        type: String,
    },
    Answer: {
        type: String,
    },
    Email: {
        type: String
    }
})

const CreateQun = new mongoose.model("CreateQuns", Schema)

module.exports = CreateQun
