const uuid = require('node-uuid');

const secretKey = uuid.v4();

module.exports = {
  secret: secretKey,
  database: process.env.MONGO_URI || 'localhost/nef'
};
