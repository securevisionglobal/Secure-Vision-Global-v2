const mongoose = require("mongoose");

const adminModel = mongoose.Schema({
  adminId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: {type: Boolean, default: true},
});

module.exports = mongoose.model("Admin", adminModel);
