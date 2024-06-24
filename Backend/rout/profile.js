const express = require("express")
const signupSchema = require("../module/SignUpSchema")
const profile = express()
profile.use(express.json())
const cors = require('cors');
profile.use(cors()); 
const authenticateToken = require('../middleware/authMiddleware');


profile.get("/profile/:id",authenticateToken,async (req,res)=>{
    console.log("Authenticated user:", req.user);
    const id = req.params.id;
    try {
      const data = await signupSchema.findById(id);
      if (!data) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
})

module.exports = profile