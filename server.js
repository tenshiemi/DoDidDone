var express = require('express');
var server = express();

server.get('/', function(request, response) {
	response.send('Hello World!');
});

server.listen(3000, function() {
	console.log('App Listening on Port 3000');
});