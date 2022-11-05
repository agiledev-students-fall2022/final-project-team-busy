const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("No email or password provided");
    return res.status(400).json({ error: "Invalid email or password" });
  }
  console.log("Email: ", email, "Password: ", password);

  //(temp) will be replaced by checking if user exists in DB
  if (email != "email123@gmail.com") {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (password != "password123") {
    return res.status(400).json({ error: "Invalid password" });
  }

  //(temp) respond with user info
  res.status(201).json({
    email: "John Doe",
    id: 1234,
  });
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  // create user in DB

  //(temp) will be replaced by fetched user from DB
  res.status(200).json({
    email,
    id: 2345,
  });
});

module.exports = router;
