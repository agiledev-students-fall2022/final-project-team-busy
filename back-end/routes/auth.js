const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(8).required(),
  passwordConfirm: Joi.ref("password"),
});

router.post("/login", (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  //(temp) will be replaced by checking if user exists in DB
  if (value.email != "test@gmail.com" || value.password != "password123") {
    return res.status(400).json({ error: "Incorrect email or password" });
  }

  //(temp) respond with user info
  res.status(200).json({
    name: "John Doe",
    id: 1234,
  });
});

router.post("/register", async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  //temporary test
  // const user = await User.create({
  //   username: "Test",
  //   first: "Bryan",
  //   last: "Chavez",
  //   bio: "lorem ipsum dolor",
  //   accountSetting: {
  //     email: "test@gmail.com",
  //     passHash: "password123",
  //   },
  // });

  // if (user) {
  //   res.status(201).send("");
  //   console.log("Successfully registered");
  // } else {
  //   res.status(400).send("");
  //   console.log("Filed register");
  // }

  //(temp) respond with user info
  res.status(201).json({
    name: "John Doe",
    id: 2345,
  });
});

module.exports = router;
