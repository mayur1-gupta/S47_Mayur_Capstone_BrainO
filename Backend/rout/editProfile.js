const express = require("express");
const editProfile =express();
editProfile.use(express.json());
const multer = require ("multer");
const upload = multer();
const mongoose = require("../cannectors/mongoDB");
const singupSchema = require("../module/SignUpSchema");

editProfile.get("/editprofile/:id", async (req, res) => {
try {
    const id =req.params.id
    const data = await singupSchema.findById(id)
    res.send(data)
    console.log(data)
}
catch(err){
console.log (err);
res.status(500).send("Internal Server Error")
}
})
editProfile.put("/editprofile/:id", upload.none(), async(req, res) => {
    try {
    const {id} = req.params
    console.log (req. body);
    console.log (req.body.number);
    const updatedData = await singupSchema.findByIdAndUpdate({_id: id})
    updatedData.Name = req.body.name
    updatedData.Number = req.body.number
    updatedData.Age = req.body.age
    updatedData.save()
    res.send(updatedData)
    console.log ("data updated", updatedData) ;
} catch (error) {
console.log (error);
res. status (500). send("Internal Server Error")

}
})


module.exports = editProfile