//set up GET route for Users
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

//temp user data 
//  const usersList = [
//     {
//         first_name: "John",
//         last_name: "Doe",
//         username: "johnny123",
//     },
//     {
//         first_name: "Peter",
//         last_name: "Pan",
//         username: "peters345",

//     },
//     {
//         first_name: "Jennifer",
//         last_name: "Lopez",
//         username: "jenny718",

//     },
// ];

//Build GET request 
router.get('/:username', async (req,res) => {
    try{
        const {first, last, username} = await User.findOne({username: req.params.username})
        return res.status(200).json({
            first: first,
            last: last,
            username: username, 
        });
    }catch (err){
        return res.status(404).json({error: "No User Found"});
    }
})

module.exports = router;
