//set up GET route for Users
const express = require("express");
const router = express.Router();

//temp user data 
 const usersList = [
    {
        first_name: "John",
        last_name: "Doe",
        username: "johnny123",
    },
    {
        first_name: "Peter",
        last_name: "Pan",
        username: "peters345",

    },
    {
        first_name: "Jennifer",
        last_name: "Lopez",
        username: "jenny718",

    },
];

//Build GET request 
router.get('/:username', (req,res) => {
    const { username } = req.params;
    const user = usersList.find(u => u.username === username);
    if (user){
        res.status(200).send(user);
    }
    else{
        res.status(404).send("No user found");
    }
})

module.exports = router;



