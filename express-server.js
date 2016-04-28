const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var Todo = require('./models/todo');

const apiServer = (PORT) => {
  const backendServer = express();
  const static_path = path.join(__dirname, 'dist');

  var todoItems = { "todos": [
      { "text": "checked item", "completed": true },
      { "text": "unchecked item", "completed": false }
    ]
  }

  backendServer.use(express.static(static_path));
  backendServer.use(bodyParser.json());

    /**
   * HTTP GET /tasks
   * Returns: the list of tasks in JSON format
   */
  backendServer.get('/todos', (req, res) => {
    res.json(todoItems);
  });

  backendServer.post('/todo', (req, res) => {
    todoItems.todos.push({ "text": req.body.text, "completed": false });
    res.json(todoItems);
  });

  backendServer.delete('/todo', (req, res) => {
    const index = parseInt(req.body.index, 10);
    todoItems.todos = todoItems.todos.slice(0, req.body.index)
      .concat(todoItems.todos.slice(req.body.index + 1));
    res.json(todoItems);
  });

  backendServer.put('/todo', (req, res) => {
    const index = parseInt(req.body.index, 10);
    if (req.body.text) {
      todoItems.todos[index].text = req.body.text
    } else {
      todoItems.todos[index].completed = !todoItems.todos[index].completed;
    }
    res.json(todoItems);
  });

  backendServer.get('/*', (request, response) => {
    response.sendFile('index.html', {
      root: static_path
    });
  })

  backendServer.listen(PORT, (err) => {
    if (err) { console.log(err) };
    console.log(`Listening at localhost:${PORT}`);
  });
}

module.exports = apiServer;
