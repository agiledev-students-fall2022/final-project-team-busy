//set up GET route for Users
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Group = mongoose.model("Group");

//temp group data 
//  const groupsList = [
//     {
//         groupname: "nycbuds",
//         members: ["Mike", "Paul", "Bob"],
//     },
//     {
//         groupname: "welikepizza",
//         members: ["Jeff", "Amy", "Bob"],

//     },
//     {
//         groupname: "biking",
//         members: ["Zoe", "Amy", "Stan"],

//     },
// ];

//Build GET request 

router.get('/:groupname', async (req,res) => {
    console.log(req.params.groupname)
    try{
        const group = await Group.findOne({groupName: req.params.groupname})
        return res.status(200).json({
            groupName: group.groupName
        });
    }catch (err){
        return res.status(404).json({error: "No Group Found"});
    }
})
module.exports = router;