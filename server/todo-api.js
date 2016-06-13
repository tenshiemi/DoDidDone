module.exports = function(apiRoutes) {
  /*
   * HTTP GET /tasks
   * Returns: the list of tasks in JSON format
   */
  apiRoutes.get('/todos', (request, response) => {
    return TodoModel.find((err, todos) => {
      if (!err) {
        return response.send(todos);
      } else {
        response.status(500);
        return response;
      }
    });
  });

  apiRoutes.post('/todos', (request, response) => {
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

  apiRoutes.delete('/todos/:id', (request, response) => {
    return TodoModel.findById(request.params.id, (err, todo) => {
      if (err) return response.status(500);

      return todo.remove((err) => {
        if (!err) {
          console.log("Todo item deleted");
          return response.send('');
        } else {
          return response.status(500);
        }
      });
    });
  });

  apiRoutes.put('/todos/:id', (request, response) => {
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
}
