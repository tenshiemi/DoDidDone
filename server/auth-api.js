const bcrypt = require('bcrypt');

module.exports = function(server, apiRoutes) {
  const secret = server.get('superSecret');

  const generateToken = (user) => {
    // If user successfully signs up or authenticates, create a token
    return jwt.sign({ userName: user.name, userEmail: user.email }, secret, {
      expiresIn: 86400 // expires in 24 hours
    });
  }

  apiRoutes.post('/signup', function(request, response) {
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

          console.log('Account creation succeeded for', request.body.email);

          // If user successfully signs up, create a token
          const token = generateToken(user);

          // Return the information including token as JSON
          response.json({
            email: user.email,
            id: user._id,
            success: true,
            token: token,
          });
        });
      });
    });
  });

  apiRoutes.post('/login', function(request, response) {
    User.findOne({
      email: request.body.email
    }, (findErr, user) => {
      if (findErr) throw findErr;

      if (!user) {
        console.error('Couldn\'t find user', request.body.email);
        response.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        // Load hash from your password DB.
        bcrypt.compare(request.body.password, user.password, (compareErr, compareRes) => {
          if (compareRes !== true) {
            console.error('Password check failed for', request.body.email);
            response.json({ success: false, message: 'Authentication failed.' });
          } else {
            console.log('Log in succeeded for', request.body.email);
            // If user successfully authenticates, create a token
            const token = generateToken(user);

              // Return the information including token as JSON
            response.json({
              email: user.email,
              id: user._id,
              success: true,
              token: token,
            });
          }
        });
      }
    })
  });

  apiRoutes.use(function(request, response, next) {
    console.log('Checking for token');
    // Check header or url parameters or post parameters for token
    var token = request.body.token || request.query.token || request.headers['x-access-token'];

    // Decode token
    if (token) {
      // Verifies secret and checks expiration
      jwt.verify(token, secret, (authErr, decoded) => {
        if (authErr) {
          return response.status(401).json({ success: false, message: 'Failed to authenticate token.' });
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

  apiRoutes.post('/authenticate', function(request, response) {
    User.findById(request.body.id, (findErr, user) => {
      if (findErr) throw findErr;

      if (!user) {
        console.error('Couldn\'t find user', request.body.email);
        response.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        // Return the information including token as JSON
        response.json({
          email: user.email,
          success: true
        });
      }
    })
  });
}
