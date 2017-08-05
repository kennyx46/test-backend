var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Vote = require('../models/Vote');
var ObjectId = require('mongoose').Types.ObjectId;

/* GET home page. */
router.post('/like', function(req, res, next) {
  var userName = req.body.userName

  User.findOne({name: userName})
    .then(function (user) {
      Vote.where({userId: new ObjectId(user._id)})
        .exec(function (ddd) {
          console.log('ddd')
          console.log(ddd)
        })
      // .update({$set: {$inc: { count: 1 }}})
        .then(function (d) {
          res.sendStatus(200)
        })
    })

});

router.post('/dislike', function(req, res, next) {
  var userName = req.body.userName

  User.findOne({name: userName})
    .then(function (user) {
      Vote.where({userId: user._id}).update({$set: {$inc: { count: -1 }}})
        .then(function () {
          res.sendStatus(200)
        })
    })
});

module.exports = router;
