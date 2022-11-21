const express = require("express");
const router = express.Router();
const data = require('../mock-data/friend-mock-data.json')
const mongoose = require("mongoose");
const Group = mongoose.model("Group");

router.get("/", (req, res) => {
    res.send(data)
})

router.post("/", async (req, res) => {
    const { name, dp, friendsAdded } = req.body

    if (!name || friendsAdded.length === 0) {
        res.status(400).json({
            error: "Please enter name and add friends to create a group."
        })
    }

    const group = await Group.create({
        members: [],
        events: [],
        groupName: name,
        desc: "",
        creator: "5f9f1b0b1b9d8c2b8c8b8b8b",
        profilePic: dp,
    }, (err, group) => {
        if (err) {
            res.status(400).json("Error creating group")
        } else {
            res.status(201).json(group)
        }
    })

    res.status(200).json({
        name: name,
        dp: dp,
        friendsAdded: friendsAdded
    })

    res.status(400).json({
        error: "Unable to create a group at the moment. Please try again later."
    })
});

module.exports = router;