const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    Name : String,
    Email : String,
    Password : String,
    ConfirmPassword : String,
    Number : Number,
    profileImage: String,
})

const signupSchema = new mongoose.model("userSignUpData",schema)

module.exports = signupSchema