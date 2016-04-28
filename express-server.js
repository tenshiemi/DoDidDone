const express = require('express');
const path = require('path');

const apiServer = (PORT) => {
  const backendServer = express();
  const static_path = path.join(__dirname, 'dist');

  backendServer.use(express.static(static_path));

  backendServer.get('/*', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  })

  backendServer.listen(PORT, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:8080');
  });
}

module.exports = apiServer;
