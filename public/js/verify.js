var express = require('express');
var router = express.Router();

/* GET home page. */
var db = req.db;
var usercollection = db.get('userinfo');

window.setInterval(function () {
  usercollection.find( {username: username}, {}, function (e, existingusers) {
    if (loggedin = 1) {
      $(".loggedin").text('Logged in');
    }
  });
  console.log("hello")
}, 5000);
  console.log(signedin)


module.exports = router;
