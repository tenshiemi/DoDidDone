module.exports = function(server, apiRoutes){
  apiRoutes.get('/signup', function(request, response) {
    // create a sample user
    var nick = new User({
      name: 'Nick Cerminara',
      email: 'test@truss.works',
      password: 'password',
      admin: true
    });

    // save the sample user
    nick.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');
      response.json({ success: true });
    });
  });

  apiRoutes.post('/authenticate', function(request, response) {
    User.findOne({
      email: request.body.email
    }, (err, user) => {
      if (err) throw err;

      if (!user) {
        response.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        if (user.password != request.body.password) {
          response.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
          // if user is found and password is right
          // create a token
          var token = jwt.sign(user, server.get('superSecret'), {
            expiresIn: 43200 // expires in 24 hours
          });

          // return the information including token as JSON
          response.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }
    })
  });

  apiRoutes.use(function(request, response, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
      // verifies secret and checks expiration
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });
    } else {
      // if there is no token, return an error
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  });
}
