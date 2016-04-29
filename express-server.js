const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

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

  backendServer.get('/*', (req, res) => {
    res.sendFile('index.html', {
      root: static_path
    });
  })

  backendServer.listen(PORT, (err) => {
    if (err) { console.log(err) };
    console.log(`Listening at localhost:${PORT}`);
  });
}

module.exports = apiServer;
