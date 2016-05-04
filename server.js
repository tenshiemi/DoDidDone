const appServer = require("./server/webpack-server");
const apiServer = require("./server/express-server");
const mongoose = require('mongoose');
const config = require('./config');

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === "production";

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

if (PROD) {
  apiServer(PORT);
} else {
  apiServer(8080);
  appServer(3000);
}
