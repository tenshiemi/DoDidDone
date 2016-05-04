const express    = require('express')
      morgan     = require('morgan')
      path       = require('path')
      bodyParser = require('body-parser') // parses JSON from api requests
      jwt        = require('jsonwebtoken') // used to create, sign, and verify tokens
      config     = require('../config') // get our config file
      User       = require('../models/user')
      TodoModel  = require('../models/todo');

const apiServer = (PORT) => {
  const backendServer = express();
  const static_path = path.join(__dirname, 'dist');

  backendServer.use(express.static(static_path));
  backendServer.set('superSecret', config.secret); // secret variable

  // use body parser so we can get info from POST and/or URL parameters
  backendServer.use(bodyParser.urlencoded({ extended: false }));
  backendServer.use(bodyParser.json());

  // use morgan to log requests to the console
  backendServer.use(morgan('dev'));

  require('./auth-api')(backendServer);
  require('./todo-api')(backendServer);

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
