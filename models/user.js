// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');

// set up a mongoose model and pass it using module.exports
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('User', userSchema);
