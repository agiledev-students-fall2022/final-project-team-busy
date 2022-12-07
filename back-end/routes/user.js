const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const protect = require("../middleware/authMiddleware");
const User = mongoose.model("User");

// Get user info from database!
router.get('/:id', protect, async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        // Check if the current user is friends with the one who retrieved the req
        const isFriend = user.friends.includes(req.user.id);
        res.status(200).json({
            message: "Success",
            user: user,
            isFriend: isFriend,
        })
    }
    catch (err) {
        res.status(500).json({
            message: "An error happened",
            error: err
        })
    }

})


module.exports = router;