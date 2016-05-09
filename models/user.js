// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');

// set up a mongoose model and pass it using module.exports
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, index: true },
    name: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);
