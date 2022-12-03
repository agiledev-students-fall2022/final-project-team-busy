const express = require("express");
const router = express.Router();
const data = require('../mock-data/friend-mock-data.json')
const mongoose = require("mongoose");
const Group = mongoose.model("Group");
const User = mongoose.model("User");
const Joi = require("joi");

const groupSchema = Joi.object({
    members: Joi.array().unique().items(Joi.string()).min(1).required(),
    events: Joi.array().unique().items(Joi.string()).required(),
    groupName: Joi.string().required(),
    desc: Joi.string().allow(null, ''),
    creator: Joi.string().required(),
    profilePic: Joi.string().allow(null, ''),
})

router.get("/", (req, res) => {
    res.send(data)
})

router.post("/", async (req, res) => {
    const { members, events, groupName, desc, creator, profilePic } = req.body

    const { error } = groupSchema.validate(req.body);
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    // if (!groupName || members.length === 0) {
    //     res.status(400).json({
    //         error: "Please enter name and add friends to create a group."
    //     })
    // }

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
            // Find user by creator id and add group to their groups array
            const user = User.findById(creator, (err, user) => {
                if(err) {
                    res.status(400).json({error: "Failed to find user"})
                    console.log(err)
                } else {
                    user.groups.push(group._id)
                    user.save()
                }
            })
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