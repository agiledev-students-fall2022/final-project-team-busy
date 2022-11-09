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
    groups: Joi.array().unique().items(Joi.string())
})

// Post request to add events to the page
router.post("/create-events-page", (req,res) => {
    
})