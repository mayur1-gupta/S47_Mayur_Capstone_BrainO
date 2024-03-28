const mongoose = require("mongoose")


const connector = mongoose.connect("mongodb+srv://2004mayurgupta:mayur@2004@mayurdb.mqyxje7.mongodb.net/?retryWrites=true&w=majority&appName=MayurDB",{dbName:"userSignUpData"})
.then(()=>{
    console.log("mongoose in canneted")
}
)
.catch((err)=>{
    console.log(err);
})

module.exports = connector