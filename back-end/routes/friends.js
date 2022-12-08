const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const protect = require("../middleware/authMiddleware");
const Group = mongoose.model("Group");
const User = mongoose.model("User");

// Get all friends from database!
router.get('/', protect, async(req,res) => {
    try {
        const user = await User.findById(req.user.id).populate("friends");
        res.status(200).json({
            message: "Success",
            friends: user.friends
        })
    }
    catch (err) {
        res.status(500).json({
            message: "An error happened",
            error: err
        })
    }

})

// Add friend
router.post('/add', protect, async (req,res) => {
    try {
        const curr = await User.findByIdAndUpdate(req.user.id,{$push : {friends: req.body.id}} )
        const other = await User.findByIdAndUpdate(req.body.id, {$push : {friends: req.user.id}} )
        res.status(200).json({
            message: "Success",
            friends: user.friends
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