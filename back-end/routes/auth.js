const express = require("express");
const router = express.Router();
const Joi = require("joi");

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
  if (value.email != "email123@gmail.com") {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (value.password != "password123") {
    return res.status(400).json({ error: "Invalid password" });
  }

  //(temp) respond with user info
  res.status(201).json({
    name: "John Doe",
    id: 1234,
  });
});

router.post("/register", (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  //(temp) respond with user info
  res.status(200).json({
    email: "John Doe",
    id: 2345,
  });
});

module.exports = router;
