const express = require("express")
const updateQun = express()
const connector = require("../cannectors/mongoDB")
const QuestionListSchema = require("../module/CreateQunSchema");
const CreateQun = require("../module/CreateQunSchema");
updateQun.use(express.json())    





updateQun.get("/updatequn/:id",(req,res)=>{
        const {id} = req.params
        CreateQun.findById(id)
        .then(users => res.json(users))
        .catch(err => console.log(err))
    })

updateQun.put("/updatequn/:id",async(req,res)=>{
    try {
        console.log("route visited");
        console.log(req.body);
        const {id} = req.params
        const updatedData = await QuestionListSchema.findByIdAndUpdate({_id:id}, req.body)
        // updatedData.Question = req.body.Question
        // updatedData.Answer = req.body.Answer
        res.send(updatedData)
    // console.log("qqqq",updatedData.Question);
    // console.log ("data updated", updatedData) ;

    }    
    catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = updateQun