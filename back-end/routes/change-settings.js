//set up route to change account setting
const express = require("express");
const router = express.Router();
const Joi = require("joi");

//temp account setting data 

const accountSettings = [
    {
        private: true, // public or private 
        password: "password123", //current password
        bio: "Add your bio about you!",


    },
]

const schema = Joi.object({
    password: Joi.string().min(8).required(),
    bio:  Joi.string().min(10).required(),
    private: Joi.boolean().default(true), 

  });

//build POST request to change Password;
router.post("/Password", (req,res) => {
    const passwordSchema = Joi.string().min(8).required();
    const { error } = passwordSchema.validate(req.body.password);
    if (error){
        res.status(400).send("Invalid Password, please try again");
    }
    else{
        res.status(200).send("Success");
    }
});

//build POST request change bio 

router.post("/Bio", (req,res) =>{
    const bioSchema = Joi.string().min(10).required();
    const { error } = bioSchema.validate(req.body.bio);
    if (error){
        res.status(400).send("Invalid bio, please try again");
    }
    else{
        res.status(200).send("Success");
    }
})


//build POST request to change privacy

router.post("/Privacy", (req,res) =>{
    const privacySchema = Joi.boolean().default(true); 
    const { error } = privacySchema.validate(req.body.privacy);
    if (error){
        res.status(400).send("Invalid");
    }
    else{
        res.status(200).send("Success");
    }
})






//Current Account Settings 
router.get("/", (req, res) =>{
    res.send(accountSettings);
});




module.exports = router; 





