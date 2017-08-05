var mongoose = require('../connection');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  imgSrc: String,
});

var User = mongoose.model('User', UserSchema);


// var user = new User({
//   name: 'abc',
//   imgSrc: 'coool'
// });

// user.save(function (err, results) {
//   console.log(results._id);
// });

module.exports = User;