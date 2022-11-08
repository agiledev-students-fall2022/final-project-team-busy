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
    if (group){
        res.status(200).send(group)
    }
    else{
        res.status(404).send("No group found")
    }
    
});

module.exports = router;