const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = mongoose.model('Group');
const User = mongoose.model('User');

router.options("/:groupID", (req, res) => {
    res.send(200);
});

router.post('/', (req, res) => {
    const { userID, groupID } = req.body;
    // Find group by id
    const group = Group.findById(groupID, (err, group) => {
        if (err) {
            res.status(400).json({ error: "Failed to find group" });
            console.log(err);
        } else {
            // Find user by id
            const user = User.findById(userID, (err, user) => {
                if (err) {
                    res.status(400).json({ error: "Failed to find user" });
                    console.log(err);
                } else {
                    // Add user to group members array and group to user groups array
                    group.members.push(userID);
                    group.save();
                    user.groups.push(groupID);
                    user.save();
                    // Add group's events to user's events array
                    group.events.forEach((event) => {
                        user.events.push(event);
                    });
                    res.status(201).json({ group });
                }
            });
        }
    });
});

module.exports = router;