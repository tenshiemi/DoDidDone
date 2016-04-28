var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);
