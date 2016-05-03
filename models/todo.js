const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);
