const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Group = mongoose.model("Group");
const User = mongoose.model("User");

router.options("/:groupID", (req, res) => {
    res.send(200);
});

router.post("/:groupId", (req, res) => {
    const { groupId, userId, requestType } = req.body;
    // Find group by id
    const group = Group.findById(groupId, (err, group) => {
        if (err) {
            res.status(400).json({ error: "Failed to find group" });
            console.log(err);
        } else {
            // Find user by id
            const user = User.findById(userId, (err, user) => {
                if (err) {
                    res.status(400).json({ error: "Failed to find user" });
                    console.log(err);
                } else {
                    // If requestType is "leave", remove user from group members array
                    if (requestType === "leave") {
                        const index = group.members.indexOf(userId);
                        if (index > -1) {
                            group.members.splice(index, 1);
                        }
                        group.save();
                        const index2 = user.groups.indexOf(groupId);
                        if (index2 > -1) {
                            user.groups.splice(index2, 1);
                        }
                        user.save();
                        res.status(201).json({ group });
                        console.log(group);
                    }
                }
            });
        }
    });
});

module.exports = router;