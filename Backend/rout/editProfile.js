const express = require("express");
const editProfile = express();
editProfile.use(express.json());
const multer = require("multer");
const upload = multer();
const mongoose = require("../cannectors/mongoDB");
const singupSchema = require("../module/SignUpSchema");


editProfile.get("/editprofile/:id", async (req, res) => {
    try {
       const id =req.params.id
       const data = await singupSchema.findById(id)
       res.send(data)
        }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error")
    }
    }  
)

editProfile.put("/editprofile/:id", upload.none(), async (req,res)=>{
    try {
        const {id} = req.params
        console.log(req.body);
        console.log(req.body.number);
        const updateddata = await singupSchema.findByIdAndUpdate({_id:id})
        updateddata.Name = req.body.name
        updateddata.Number = req.body.number
        updateddata.Age = req.body.ag
        updateddata.save()
        res.send(updateddata)
        console.log("data updated",updateddata);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
})


module.exports = editProfile


