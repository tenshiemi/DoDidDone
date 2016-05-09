const bcrypt = require('bcrypt');

module.exports = function(server, apiRoutes) {
  apiRoutes.post('/signup', (request, response) => {
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, (saltingErr, salt) => {
      if (saltingErr) throw saltingErr;

      bcrypt.hash(request.body.password, salt, (hashingErr, hash) => {
        if (hashingErr) throw hashingErr;

        const user = new User({
          name: request.body.name,
          email: request.body.email,
          password: hash
        });

        user.save((saveErr) => {
          if (saveErr) throw saveErr;

          console.log('User saved successfully');
          response.json({ success: true });
        });
      });
    });
  });

  apiRoutes.post('/authenticate', function (request, response) {
    User.findOne({
      email: request.body.email
    }, (findErr, user) => {
      if (findErr) throw findErr;

      if (!user) {
        response.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        // Load hash from your password DB.
        bcrypt.compare(request.body.password, user.password, (compareErr, response) => {
          if (response !== true) {
            response.json({ success: false, message: 'Authentication failed.' });
          } else {
            // If user successfully authenticates, create a token
            const token = jwt.sign({ userName: user.name, userEmail: user.email }, server.get('superSecret'), {
              expiresIn: 86400 // expires in 24 hours
            });

            // Return the information including token as JSON
            response.json({
              success: true,
              token: token
            });
          }
        });
      }
    })
  });

  apiRoutes.use(function(request, response, next) {
    // Check header or url parameters or post parameters for token
    var token = request.body.token || request.query.token || request.headers['x-access-token'];

    // Decode token
    if (token) {
      // Verifies secret and checks expiration
      jwt.verify(token, server.get('superSecret'), (authErr, decoded) => {
        if (authErr) {
          return response.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          // If everything is good, save to request for use in other routes
          request.decoded = decoded;
          next();
        }
      });
    } else {
      // If there is no token, return an error
      return response.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  });
}
