const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const protect = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(req.cookies);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select(
        "-accountSettings.passwordHash"
      );
      next();
    } catch (err) {
      res.clearCookie("token");
      console.log(err);
      return res.status(401).json({ message: "Not authorized" });
    }
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = protect;
