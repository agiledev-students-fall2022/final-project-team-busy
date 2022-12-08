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

// router.get("/:event", protect, async (req, res) => {

// })

router.get("/:id", protect, async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);

    const userAuthorized =
      event.owner.toString() === req.user.id ||
      event.users.some((id) => id.toString() === req.user.id);

    if (userAuthorized) {
      return res.status(200).json({ event: event });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
});

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

        await User.findByIdAndUpdate(owner, { $push: { events: newEvent.id } });

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

router.delete("/:id", protect, async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (req.user.id === event.owner.toString()) {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { events: eventId },
      });

      if (event.users.length > 0) {
        event.users.forEach(async (userId) => {
          await User.findByIdAndUpdate(userId, {
            $pull: { events: eventId },
          });
        });
      }

      if (event.groups.length > 0) {
        event.groups.forEach(async (groupId) => {
          const currentGroup = await Group.findByIdAndUpdate(groupId, {
            $pull: { events: eventId },
          });
          if (currentGroup.members.length > 0) {
            currentGroup.members.forEach(async (memberId) => {
              await User.findByIdAndUpdate(memberId, {
                $pull: { events: eventId },
              });
            });
          }
        });
      }

      await event.delete();
      return res.status(200).json({ message: "Successfully deleted event" });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

router.put("/:id", protect, async (req, res) => {
  const eventId = req.params.id;

  //get new event data from req.body
  try {
    const event = await Event.findById(eventId);

    //check if event is user's
    // update if so with
  } catch (err) {
    console.log(err);
    return req.status(500).json({ message: err });
  }
});
module.exports = router;
