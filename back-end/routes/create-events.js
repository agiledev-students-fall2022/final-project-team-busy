// POST request for create-events-page
// Importing functions

const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");


// Database Models needed
const User = mongoose.model("User");
const Event = mongoose.model("Event");
const Group = mongoose.model("Group");


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
router.post("/", async (req, res) => {
     const { startTime, endTime, owner, users, groups, desc, title} = req.body
     const { error } = eventsSchema.validate(req.body);
     if (!error) {
          const wrongUser = false, wrongGroup= false;
          const userIds = users.map(async (curr) => {
               const res = await User.findOne({username: curr});
               wrongUser = res ? false : true; 
               return res._id;
          })
          const groupIds = groups.map(async (curr) => {
               const res = await Group.findOne({groupName: curr});
               wrongGroup = res ? false : true;
               return res._id;
          })
          if (!wrongUser && !wrongGroup) {
               const ownerId= jwt.verify(token, process.env.JWT_SECRET).id;
               new Event({
                    startTime: startTime,
                    endTime: endTime,
                    owner: ownerId,
                    users: userIds,
                    groups: groupIds,
                    desc: desc,
                    title: title 
               }).save((err) => {
                    if (err) {
                         res.status(500).send({message: "Database Error"})
                    } else {
                         res.sendStatus(200)
                    }
               })
          } else {
               res.status(500).send({message: "Username or group doesn't exist"})
          }
     } else {
          res.status(500).send({message: error});
     }
})
module.exports = router;