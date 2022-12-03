const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Group = mongoose.model("Group");

// load users from users collection and groups from groups collection
router.get("/", async (req, res) => {
    const users = await User.find({});
    const groups = await Group.find({});
    res.json({ users, groups });
});

module.exports = router;