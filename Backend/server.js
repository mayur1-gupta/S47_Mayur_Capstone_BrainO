const express = require("express")
const cors = require("cors")
const app = express()
const port =3000


app.use(cors())
app.use(express.json()); 

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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});