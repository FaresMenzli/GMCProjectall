const express = require("express")
const router = express.Router()
const User = require('../Models/user')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config=require("config")
const JWT_SECRET = config.get('JWT_SECRET')
require("dotenv").config();

router.post("/register", async (req, res) => {
    try {
      let { email, password, passwordCheck, name } = req.body;
  
      // validate
  
      if (!email || !password || !passwordCheck)
        return res.status(400).json({ msg: "Not all fields have been entered." });
      if (password.length < 5)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 5 characters long." })
      if (password !== passwordCheck)
        return res
          .status(400)
          .json({ msg: "Enter the same password twice for verification." })
  
      const existingUser = await User.findOne({ email: email });
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." })
  
      if (!name) name = email
  
      const salt = await bcrypt.genSalt()
      const passwordHash = await bcrypt.hash(password, salt)
  
      const newUser = new User({
        email,
        password: passwordHash,
        name,
      })
      const savedUser = await newUser.save()
      res.json(savedUser)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })
  router.get("/", async (req,res)=>{
try {
    const getuser = await User.find()
    
    res.status(200).json(getuser)
}
catch (error) {
    res.status(500).json({errors:error})
}
    
})
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // validate
      if (!email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered." });
        
  
      const user = await User.findOne({ email: email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "No account with this email has been registered." });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
  
      const token = jwt.sign({ id: user._id },JWT_SECRET);
      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  














module.exports= router