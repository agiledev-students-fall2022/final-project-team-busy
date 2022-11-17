const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
    desc: { type: String },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

eventSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
  },
});

mongoose.model("Event", eventSchema);
