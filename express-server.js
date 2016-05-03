const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var TodoModel = require('./models/todo');

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
  backendServer.get('/todos', (request, response) => {
    return TodoModel.find((err, todos) => {
      if (!err) {
        return response.send(todos);
      } else {
        return response.status(500);
      }
    });
  });

  backendServer.post('/todos', (request, response) => {
    var todo;
    console.log("POST: ", request.body);
    todo = new TodoModel({
      text: request.body.text,
      completed: false
    });
    todo.save((err) => {
      if (!err) {
        return response.send(todo);
      } else {
        return response.status(500);
      }
    });
  });

  backendServer.delete('/todos/:id', (request, response) => {
    return TodoModel.findById(request.params.id, (err, product) => {
      if (err) return response.status(500);

      return product.remove((err) => {
        if (!err) {
          console.log("Todo item deleted");
          return response.send('');
        } else {
          return response.status(500);
        }
      });
    });
  });

  backendServer.put('/todos/:id', (request, response) => {
    return TodoModel.findById(request.params.id, (err, todo) => {
      if (err) return response.status(500);

      if (request.body.text) {
        todo.text = request.body.text
      } else {
        todo.completed = !todo.completed;
      }

      return todo.save((err) => {
        if (!err) {
          return response.send(todo);
        } else {
          return response.status(500);
        }
      });
    });
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
