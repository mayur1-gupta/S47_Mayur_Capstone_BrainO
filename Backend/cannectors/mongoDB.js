const mongoose = require("mongoose")


const mongooseConnector = mongoose.connect("mongodb+srv://mayur2004:mayur2004@mayurgpt.axydxdi.mongodb.net/?retryWrites=true&w=majority&appName=MayurGPT",{dbName:"BrainO"})
.then(()=>{
    console.log("mongoose in canneted")
}
)
.catch((err)=>{
    console.log(err);
})

module.exports = mongooseConnector