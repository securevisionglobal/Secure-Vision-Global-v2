const mongoose = require('mongoose');

const hrSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    empId:{
        type: String,
        required: true,
        unique: true
    },
    contact:{
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    
})

module.exports  = mongoose.model('hrdata', hrSchema);