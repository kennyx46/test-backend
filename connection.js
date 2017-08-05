var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/voting', {
  useMongoClient: true
});

mongoose.Promise = global.Promise

var db = mongoose.connection;

db.on('error', function(err) {
  console.error('Error connecting mongo', err)
});

db.once('open', function() {
  console.log('Successfully connected');
});

module.exports = mongoose;
