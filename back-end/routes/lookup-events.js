//set up GET route for Events
const express = require("express");
const router = express.Router();

//temp event data 
 const eventsList = [
    {
        id: 1234,
        title: "Group Study Session!",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore nulla, nihil deserunt adipisci sit ab vero facere, suscipit magnam quidem quibusdam porro facilis ullam necessitatibus, dolor quis dicta tenetur enim.",
        members: ["Alan", "Beth", "Chris"],
        groups: ["nycbuds"]
    },
    {
        id: 2456,
        title: "Book Club",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore nulla, nihil deserunt adipisci sit ab vero facere, suscipit magnam quidem quibusdam porro facilis ullam necessitatibus, dolor quis dicta tenetur enim.",
        members: ["Steve", "Elizabeth"],
        groups: ["nycbuds", "welikepizza"]

    },
    {
        id: 3456,
        title: "Company Meeting",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore nulla, nihil deserunt adipisci sit ab vero facere, suscipit magnam quidem quibusdam porro facilis ullam necessitatibus, dolor quis dicta tenetur enim.",
        members: ["Mr. CEO", "Ajay", "Demi"],
        groups: ["biking"]

    },
];

//Build GET request 
router.get("/:id", (req,res) => {
    const { id } = req.params;
    const event = eventsList.find(e => e.id === id);
    res.send(event);
    
});

module.exports = router;