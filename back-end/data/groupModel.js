const mongoose = require("mongoose");

const { Schema } = mongoose;

const groupSchema = new Schema(
  {
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], //ref to users
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }], //ref to events
    groupName: { type: String, required: true },
    desc: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //ref to creator
    profilePic: { type: String },
  },
  { timestamps: true }
);

groupSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
  },
});

mongoose.model("Group", groupSchema);
