require('dotenv').config();
const express = require('express');
const multer = require('multer');
const schema = require('../module/SignUpSchema');
const uploads = express();
const fs = require('fs'); 
const cloudinary = require("../config/Cloudinarys");
uploads.use(express.json());


// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync('uploads')) {
        fs.mkdirSync('uploads'); 
    }
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({storage : storage});

// Endpoint to upload profile image
uploads.post(`/upload/:id`, upload.single('profileImage'), async (req, res) => {
    try {
    const user = await schema.findById(req.params.id);
    if (!user) {
        return res.status(404).send('User not found');
      }
    console.log("hi");
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'profile_images',
    });
    console.log(result);
    user.profileImage = result.secure_url;
    await user.save();
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error("Failed to delete local file:", err);
      } else {
        console.log("Local file deleted successfully");
      }
    });
    console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = uploads;



