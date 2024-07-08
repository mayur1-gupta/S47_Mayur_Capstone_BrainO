const express = require("express")
const cors = require("cors")
const app = express()
const port =300

app.use(cors())
app.use(express.json()); 

const path = require('path');


const singup = require("./rout/signupRout")
app.use("/",singup)

const login = require("./rout/login")
app.use("/",login)

const home = require("./rout/home")
app.use("/",home)

const profile = require("./rout/profile")
app.use("/",profile)

const editProfile = require("./rout/editProfile")
app.use("/",editProfile)

const createQun = require("./rout/createQun")
app.use("/",createQun)

const qunList = require("./rout/AllQunList")
app.use("/",qunList)

const userQunList = require("./rout/usreQunList")
app.use("/",userQunList)

const deleteQun = require("./rout/deleteQun")
app.use("/",deleteQun)

const updateQun = require("./rout/updateQun")
app.use("/",updateQun)

const quiz = require("./rout/Quiz")
app.use("/",quiz)

const MCQResult = require("./rout/MCQResult")
app.use("/",MCQResult)

const uploads = require("./rout/upload")
app.use('/uploads/', express.static(path.join(__dirname, 'uploads')));
app.use("/",uploads)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});