//set up route to change account settings
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Settings = mongoose.model("Settings");
const Joi = require("joi");
const protect = require("../middleware/authMiddleware");

//temp account setting data [REDUNDANT AS OF SPRINT 3]
//const accountSettings = [
//  {
//    private: true, // public or private
//    password: "password123", //current password
//    bio: "Add your bio about you!",
//  },
//];

const schema = Joi.object({
  password: Joi.string().min(8).required(),
  bio: Joi.string().min(10).required(),
});

//build POST request to change Password;
router.post("/Password", protect, async (req, res) => {
  const passwordSchema = Joi.string().min(8).required();
  const { error } = passwordSchema.validate(req.body.password);
  if (error) {
    res.status(400).send("Invalid Password, please try again");
  } 
  const doc = await User.findById( { _id: req.body.owner.id } )
  doc.pass = newPass
  doc.save() 
  console.log(req, res)
  res.status(200).send("Success");
});

//build POST request change bio
router.post("/Bio", async (req, res) => {
  const bioSchema = Joi.string().min(10).required();
  const { error } = bioSchema.validate(req.body.bio);
  if (error) {
    res.status(400).send("Invalid bio, please try again");
  } 
  const doc = await User.findById( { _id: req.body.owner.id } )
  doc.bio = newBio
  doc.save() 
  console.log(req, res)
  res.status(200).send("Success");
});

//build POST request to change privacy [FUNCTIONALITY REMOVED]
//router.post("/Privacy", (req, res) => {
//const privacySchema = Joi.boolean().default(true);
//  const { error } = privacySchema.validate(req.body.privacy);
//  if (error) {
//    res.status(400).send("Invalid");
//  } else {
//    res.status(200).send("Success");
//  }
//});

//Current Account Settings
router.get("/", (req, res) => {
  res.send(accountSettings);
});

module.exports = router;
