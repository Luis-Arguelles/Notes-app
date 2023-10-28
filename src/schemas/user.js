const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/
    },

    password: {
        type: String,
        required: true,
        match: /^.{4,}$/
    }
});


module.exports = mongoose.model('User', userSchema);