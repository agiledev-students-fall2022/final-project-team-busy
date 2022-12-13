//set up GET route for Users
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Group = mongoose.model("Group");

router.get("/:groupname", async (req, res) => {
  try {
    const group = await Group.findOne({ groupName: req.params.groupname });
    return res.status(200).json({
      groupID: group._id,
      groupName: group.groupName,
    });
  } catch (err) {
    return res.status(404).json({ error: "No Group Found" });
  }
});

module.exports = router;
