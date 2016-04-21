var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  todoId: { type: String, unique: true, index: true },
  text: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);
