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
  const static_path = path.join(__dirname, '../', 'dist');

  backendServer.use(express.static(static_path));
  backendServer.set('superSecret', config.secret); // Secret variable

  // Use body parser so we can get info from POST and/or URL parameters
  backendServer.use(bodyParser.urlencoded({ extended: false }));
  backendServer.use(bodyParser.json());

  // Use morgan to log requests to the console
  backendServer.use(morgan('dev'));

  // API ROUTES -------------------

  // Get an instance of the router for api routes
  const apiRoutes = express.Router();
  require('./todo-api')(apiRoutes);
  require('./auth-api')(backendServer, apiRoutes);

  // Apply the routes to our application with the prefix /api
  backendServer.use('/api', apiRoutes);

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
