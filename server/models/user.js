const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    languages: {
        type: [String]
    },
    color: {
        type: String
    },
    date: {
        type: Date
    }, 
    datetime: {
        type: String
    },
    time: {
        type: String
    },
    week: {
        type: String
    },
    hiddenData: {
        type: String
    },
    month: {
        type: String
    },
    weight: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    homepage: {
        type: String
    }

});

module.exports = model('user', UserSchema, 'users');