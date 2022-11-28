const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const protect = require("../middleware/authMiddleware");

const schema = Joi.object({
  username: Joi.string().min(6).required(),
  first: Joi.string(),
  last: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(8).required(),
  passwordConfirm: Joi.ref("password"),
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

router.post("/register", async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }

  //check if user exists
  const userEmailExists = await User.findOne({
    "accountSettings.email": value.email,
  });

  if (userEmailExists) {
    console.log("Email already in use");
    return res.status(400).json({ message: "Email already in use" });
  }

  const userNameExists = await User.findOne({
    username: value.username,
  });

  if (userNameExists) {
    console.log("Username already in use");
    return res.status(400).json({ message: "Username already in use" });
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(value.password, salt);

  //create user
  const user = await User.create({
    username: value.username,
    first: value.first,
    last: value.last,
    accountSettings: {
      email: value.email,
      passwordHash,
    },
  });

  if (user) {
    return res.status(201).json({
      id: user.id,
      email: user.email,
    });
  } else {
    console.log("Invalid user data");
    return res.status(400).json({ message: "Invalid user data" });
  }
});

router.post("/login", async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }

  //check for user
  const user = await User.findOne({
    "accountSettings.email": value.email,
  });

  if (
    user &&
    (await bcrypt.compare(value.password, user.accountSettings.passwordHash))
  ) {
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      // maxAge: 1000000,
      // signed: true,
    });
    return res.status(200).json({
      first: user.first,
      last: user.last,
      accountSettings: user.accountSettings,
      id: user.id,
    });
  } else {
    console.log("Invalid email or password");
    return res.status(400).json({ message: "Invalid email or password" });
  }
});

router.post("/logout", protect, async (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out" });
});

router.get("/me", protect, async (req, res) => {
  const { id, accountSettings } = await User.findById(req.user.id);
  return res.status(200).json({
    id: id,
    email: accountSettings.email,
  });
});

module.exports = router;
