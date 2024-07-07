const mongoose = require('mongoose');

const followUp = mongoose.Schema({
    name: String,
    Number: Number,
    CompanyName: String,
    HRName: String,
    DOJ: String,
    Status: String,
    PayBackDays: Number,
});

module.exports = mongoose.model('Followup', followUp);