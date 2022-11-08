const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const {name, dp, friendsAdded} = req.body

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