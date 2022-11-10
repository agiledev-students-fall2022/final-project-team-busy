// POST request for create-events-page
// Importing functions

const express = require("express");
const router = express.Router();
const Joi = require("joi");

// We get mock data here
const friend_data = require('../mock-data/friend-mock-data.json')
const group_data = require('../mock-data/group-mock-data.json')


// Data validation schema for Events
const eventsSchema = Joi.object({
     title: Joi.string().required(),
     description: Joi.string(),
     members: Joi.array().unique().items(Joi.string()).required(),
     groups: Joi.array().unique().items(Joi.string()).required(),
     startTime: Joi.date().required(),
     endTime: Joi.date().required().greater(Joi.ref("startTime"))
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