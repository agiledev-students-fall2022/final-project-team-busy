const express = require("express");
const router = express.Router();
const friend_data = require("../mock-data/friend-mock-data");
const group_data = require("../mock-data/group-mock-data");

router.get("/", (req, res) => {
    res.send({ friends: friend_data, groups: group_data });
})

module.exports = router;