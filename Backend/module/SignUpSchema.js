const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    Name : String,
    Email : String,
    Password : String,
    ConfirmPassword : String,
    Number : Number
})

const signupSchema = new mongoose.model("datas",schema)

module.exports = signupSchema