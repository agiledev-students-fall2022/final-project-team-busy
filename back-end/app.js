const express = require("express");
const app = express();
require("dotenv").config({ silent: true }); // load environmental variables from a hidden file named .env
const morgan = require("morgan"); // middleware for nice logging of incoming HTTP requests

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")); // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

const auth = require("./routes/auth");
const createGroup = require("./routes/create-group")
const lookupUser = require("./routes/lookup-user");
const lookupGroup = require("./routes/lookup-groups")

app.use("/auth", auth);
app.use("/create-group", createGroup);
app.use("/lookupuser", lookupUser);
app.use("/lookupgroup", lookupGroup); 


module.exports = app;
