var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('users');
  var username = "catnap" /*Hypothetical improved code below--finds a loggedin user
usercollection.find( {loggedin: 1}, {}, function (e, username) {
  try {
    var username = username;
    var login = "Logged In"
  } catch(e) {
    var login = "Not Logged In"
  }*/
  usercollection.find( {username: username}, {}, function (e, loggedin) {
    if (loggedin = 1) {
      var login = "Logged In"
    }
    else {
      var login = "Not Logged In"
    }
    res.render('login', {
      title: 'Express',
      bodytext: 'This is the login page',
      loggedin: login
    });
  });
});

  /*var thisisastring = "value"*/

module.exports = router;
