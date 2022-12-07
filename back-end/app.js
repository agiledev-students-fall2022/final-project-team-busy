const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ silent: true });
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.options("*", cors());
app.use(cookieParser());

require("./data/eventModel");
require("./data/groupModel");
require("./data/userModel");

const auth = require("./routes/auth");
const loadFriendsAndGroups = require("./routes/load-friends-and-groups");
const createGroup = require("./routes/create-group");
const lookupUser = require("./routes/lookup-user");
const lookupGroup = require("./routes/lookup-groups");
const changeSettings = require("./routes/change-settings");
const events = require("./routes/events");
const groupProfile = require("./routes/group-profile");

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("error in mongodb connection");
    } else {
      console.log("mongodb is connected");
    }
  }
);

app.use("/auth", auth);
app.use("/events", events);
app.use("/load-friends-and-groups", loadFriendsAndGroups);
app.use("/create-group", createGroup);
app.use("/lookupuser", lookupUser);
app.use("/lookupgroup", lookupGroup);
app.use("/changeSettings", changeSettings);
app.use(`/GroupProfile/`, groupProfile);

module.exports = app;
