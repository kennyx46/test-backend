var mongoose = require('../connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = require('./User');

var VoteSchema = new Schema({
  count: Number,
  userId: {type: ObjectId, ref: 'User'}
});

var Vote = mongoose.model('Vote', VoteSchema);

var users = [
  {name: 'Tom', imgSrc: 'img1.jpeg'},
  {name: 'Bob', imgSrc: 'img2.jpeg'},
  {name: 'Nick', imgSrc: 'img3.jpeg'}
]

var votes = [10, 1, 50]

Vote.count()
  .then(function (count) {
    if (count === 0) {
      users.forEach(function (user, index) {
        var mongooseUser = new User(user)

        mongooseUser.save().then(function (res) {
          var vote = new Vote({
            count: votes[index],
            userId: res._id
          })
          vote.save()
        })
      })

    }
  })

module.exports = Vote;