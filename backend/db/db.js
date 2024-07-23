require('dotenv').config()
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

mongoose.connect(MONGO_URI).then(() => console.log('Connected'))
        .catch('Error')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
})

const user = mongoose.model('user', userSchema, 'users');
module.exports = user;

