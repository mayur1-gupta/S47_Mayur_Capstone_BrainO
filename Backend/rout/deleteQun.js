const express = require("express")
const deleteQun = express()
const deleteQunSchema = require("../module/CreateQunSchema")
const connector = require("../cannectors/mongoDB");
deleteQun.use(express.json());

deleteQun.delete("/deletequn/:id",(req,res)=>{
    const id = req.params.id
    deleteQunSchema.findOneAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
  })

  module.exports = deleteQun
