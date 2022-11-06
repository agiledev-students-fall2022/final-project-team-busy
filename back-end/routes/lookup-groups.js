//set up GET route for Users
const express = require("express");
const router = express.Router();

//temp group data 
 const groupsList = [
    {
        groupname: "nycbuds",
        members: ["Mike", "Paul", "Bob"],
    },
    {
        groupname: "welikepizza",
        members: ["Jeff", "Amy", "Bob"],

    },
    {
        groupname: "biking",
        members: ["Zoe", "Amy", "Stan"],

    },
];

//Build GET request 
router.get("/:groupname", (req,res) => {
    const { groupname } = req.params;
    const group = groupsList.find(g => g.groupname === groupname);
    res.send(group);
    
});

module.exports = router;