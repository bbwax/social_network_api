const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI ||  'mongodb://127.0.0.1:27017/social-network-api';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;