const express = require("express");
const router = express.Router();
const data = require('../mock-data/friend-mock-data.json')

router.get("/", (req, res) => {
    res.send(data)
})

router.post("/", (req, res) => {
    const { name, dp, friendsAdded } = req.body

    if (!name || friendsAdded.length === 0) {
        res.status(400).json({
            error: "Please enter name and add friends to create a group."
        })
    }

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