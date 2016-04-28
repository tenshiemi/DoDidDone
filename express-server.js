const express = require('express');
const path = require('path');

const apiServer = (PORT) => {
  const backendServer = express();
  const static_path = path.join(__dirname, 'dist');

  backendServer.use(express.static(static_path));

    /**
   * HTTP GET /tasks
   * Returns: the list of tasks in JSON format
   */
  backendServer.get('/tasks', (req, res) => {
    res.json({ "tasks": [
        { "text": "checked item", "completed": "true" },
        { "text": "unchecked item", "completed": "false" }
      ]
    });
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
