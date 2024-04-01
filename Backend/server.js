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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});