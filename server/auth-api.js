module.exports = function(apiRoutes){
  apiRoutes.get('/signup', function(request, response) {

    // create a sample user
    var nick = new User({
      name: 'Nick Cerminara',
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
}
