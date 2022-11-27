const express = require("express");
const router = express.Router();
const data = require('../mock-data/friend-mock-data.json')
const mongoose = require("mongoose");
const Group = mongoose.model("Group");

router.get("/", (req, res) => {
    res.send(data)
})

router.post("/", async (req, res) => {
    const { members, events, groupName, desc, creator, profilePic } = req.body

    if (!groupName || members.length === 0) {
        res.status(400).json({
            error: "Please enter name and add friends to create a group."
        })
    }

    const group = await Group.create({
        members: members,
        events: events,
        groupName: groupName,
        desc: desc,
        creator: creator,
        profilePic: profilePic,
    }, (err, group) => {
        if(err) {
            res.status(400).json({error: "Failed to create group"})
            console.log(err)
        } else {
            res.status(201).json({group})
            console.log(group)
        }
    });

    // res.status(200).json({
    //     name: name,
    //     dp: dp,
    //     friendsAdded: friendsAdded
    // })

    // res.status(400).json({
    //     error: "Unable to create a group at the moment. Please try again later."
    // })
});

module.exports = router;