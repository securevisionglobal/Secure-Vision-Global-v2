const mongoose = require('mongoose')
const companynames = mongoose.Schema({
    companyname: {
        type: String,
        required: true,
        trim: true,
    },
})
module.exports = mongoose.model('Companynames', companynames)

