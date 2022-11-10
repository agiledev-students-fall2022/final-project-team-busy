// POST request for create-events-page
// Importing functions

const express = require("express");
const router = express.Router();
const Joi = require("joi");
const friend_data = require('../mock-data/friend-mock-data.json')
const group_data = require('../mock-data/group-mock-data.json')


// Data validation schema for Events
// const eventsSchema = Joi.object({
//      title: Joi.string().required(),
//      description: Joi.string(),
//      members: Joi.array().unique().items(Joi.string()).required(),
//      groups: Joi.array().unique().items(Joi.string()).required(),
//      startTime: Joi.date().required(),
//      endTime: Joi.date().required().greater(Joi.ref("startTime"))
// })

router.get("/", (req, res) => {
     res.send({ friends: friend_data, groups: group_data });
})

// Post request to add events to the page
router.post("/", (req, res) => {
     const { title, description, friendsAdded, groupsAdded, startDate, endDate } = req.body

     if (!title || new Date(endDate) < new Date(startDate)) {
          res.status(400).json({
               error: "Invalid details entered."
          })
     }

     res.status(200).json({
          title: title,
          description: description,
          friendsAdded: friendsAdded,
          groupsAdded: groupsAdded,
          startDate: startDate,
          endDate: endDate
     })

     res.status(400).json({
          error: "Unable to create an event at the moment. Please try again later."
     })
})
module.exports = router;