const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const {name, dp, friendsChecked} = req.body

    res.status(200).json({
        name: name,
        dp: dp,
        friendsChecked: friendsChecked
    })

    res.status(400).json({
        error: "Unable to Process your Request"
    })
});

module.exports = router;