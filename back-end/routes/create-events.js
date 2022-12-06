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
const protect = require("../middleware/authMiddleware");

// Data validation schema for Events
const eventsSchema = Joi.object({
  startTime: Joi.date().required(),
  endTime: Joi.date().required().greater(Joi.ref("startTime")),
  owner: Joi.string().required(),
  users: Joi.array().unique().items(Joi.string()),
  groups: Joi.array().unique().items(Joi.string()),
  desc: Joi.string().allow(""),
  title: Joi.string().required(),
});

// Post request to add events to the page
router.post("/", protect, async (req, res) => {
  req.body.owner = req.user.id;
  const { startTime, endTime, owner, users, groups, desc, title } = req.body;
  const { error } = eventsSchema.validate(req.body);

  if (!error) {
    let wrongUser = false,
      wrongGroup = false;
    let userIds,
      groupIds = [];
    if (users || groups) {
      userIds = users.map(async (id) => {
        const res = await User.findById(id);
        wrongUser = res ? false : true;
        // return res._id;
      });
      groupIds = groups.map(async (id) => {
        const res = await Group.findById(id);
        wrongGroup = res ? false : true;
        // return res._id;
      });
    }

    if (!wrongUser && !wrongGroup) {
      try {
        const newEvent = await Event.create({
          startTime: startTime,
          endTime: endTime,
          owner: owner,
          users: users,
          groups: groups,
          desc: desc,
          title: title,
        });

        await User.findOneAndUpdate(
          { _id: owner },
          { $push: { events: newEvent.id } }
        );

        if (users.length > 0) {
          users.forEach(async (userId) => {
            await User.findByIdAndUpdate(userId, {
              $push: { events: newEvent.id },
            });
          });
        }

        if (groups.length > 0) {
          groups.forEach(async (groupId) => {
            const currentGroup = await Group.findByIdAndUpdate(groupId, {
              $push: { events: newEvent.id },
            });
            if (currentGroup.members.length > 0) {
              currentGroup.members.forEach(async (memberId) => {
                await User.findByIdAndUpdate(memberId, {
                  $push: { events: newEvent.id },
                });
              });
            }
          });
        }

        return res.status(200).json({ message: "Successfully created event" });
      } catch (err) {
        console.log("error:", err);
        return res.status(500).send({ message: "Database error" });
      }
    } else {
      res.status(500).send({ message: "Username or group doesn't exist" });
    }
  } else {
    console.log(error);
    res.status(500).send({ message: error });
  }
});
module.exports = router;
