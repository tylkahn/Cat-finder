var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('users');
usercollection.find({}, {}, function (e, userlist) {
  res.render('users', {
    title: 'Express',
    bodytext: 'This is the users page',
    userlist: userlist
  });
});

  /*var thisisastring = "value"*/
});

module.exports = router;
