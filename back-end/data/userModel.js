const mongoose = require("mongoose");
const { Schema } = mongoose;

const settingsSchema = new Schema({
  calendarPrivacy: { type: String, required: true, default: "public" },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
});

const userSchema = new Schema(
  {
    username: { type: String },
    first: { type: String },
    last: { type: String },
    bio: { type: String },
    accountSettings: settingsSchema,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    profilePic: { type: String },
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
  },
});

mongoose.model("User", userSchema);
