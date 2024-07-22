const mongoose = require("mongoose");

const followUp = mongoose.Schema({
  name: String,
  Number: Number,
  CompanyName: String,
  HRName: String,
  DOJ: String,
  Status: String,
  PayBackDays: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Followup", followUp);
