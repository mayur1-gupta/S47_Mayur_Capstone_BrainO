const express = require("express")
const signupSchema = require("../module/SignUpSchema")
const profile = express()
profile.use(express.json())

profile.get("/profile/:id" ,async (req,res)=>{
    const id = req.params.id
    const data = await signupSchema.findById(id)
    res.send(data)
})

module.exports = profile