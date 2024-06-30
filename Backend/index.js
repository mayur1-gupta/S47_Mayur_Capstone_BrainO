
const express = require("express")
const cors = require("cors")
const app = express()
const connector = require("../cannectors/mongoDB")
const QuestionListSchema = require("../module/CreateQunSchema");
const CreateQun = require("../module/CreateQunSchema");
app.use(express.json())    
app.use(cors())
const port =300


app.get("/updatequn/:id",(req,res)=>{
        const {id} = req.params
        CreateQun.findById(id)
        .then(users => res.json(users))
        .catch(err => console.log(err))
    })

app.put("/updatequn/:id",async(req,res)=>{
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

app.delete("/deletequn/:id",(req,res)=>{
    const id = req.params.id
    deleteQunSchema.findOneAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
  })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});