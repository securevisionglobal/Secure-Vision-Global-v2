const mongoose = require('mongoose')

const jobPosts = mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    jobTitle:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('JobPosts', jobPosts)