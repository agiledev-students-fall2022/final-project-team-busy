// POST request for create-events-page
// Importing functions

const express = require("express");
const router = express.Router();
const Joi = require("joi");

// Data validation schema for Events
const eventsSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    members: Joi.array().unique().items(Joi.string()),
    groups: Joi.array().unique().items(Joi.string()),
    startTime: Joi.date.required(),
    endTime: Joi.date.required().greater(Joi.ref("startTime"))
})

// Post request to add events to the page
router.post("/create-events-page", (req,res) => {
   const { error } = eventsSchema.validate(req.body);
   if (error) {
        res.status(500).send(error);
   } else {
        res.sendStatus(500);
        // Add here post information to Database
   }
})