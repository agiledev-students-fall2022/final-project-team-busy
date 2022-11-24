// POST request for create-events-page
// Importing functions

const express = require("express");
const router = express.Router();
const Joi = require("joi");


// Data validation schema for Events
const eventsSchema = Joi.object({
     startTime: Joi.date().required(),
     endTime: Joi.date().required().greater(Joi.ref("startTime")),
     owner: Joi.string().required(),
     users: Joi.array().unique().items(Joi.string()),
     groups: Joi.array().unique().items(Joi.string()),
     desc: Joi.string(),
     title: Joi.string().required(),
})

router.get("/", (req, res) => {
     res.send({ friends: friend_data, groups: group_data });
})

// Post request to add events to the page
router.post("/", (req, res) => {
     const { title, description, friendsAdded, groupsAdded, startDate, endDate } = req.body
     const { error } = eventsSchema.validate(req.body);
     if (error) {
          res.status(500).send(error);
     } else {
          res.sendStatus(200);
     }
})
module.exports = router;