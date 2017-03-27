var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('userinfo');
  var username=req.body.username;
  var password=req.body.password;
//  var pwlength=password.length
  usercollection.find( { $and: [ {username: username}, {password: password} ] }, {}, function (e, existingusers) {
    if (existingusers.length == 1){
      var signin = 1
      usercollection.update({ username: username }, { $set: { loggedin: 1} }, { upsert: true })
    }
    console.log(existingusers.length);
    /*res.render('success', {
      message: 'your user was created successfully!',
    });*/
    if (signin == 1){
      res.end('Signed in!');
    }
    // else if (pwlength < 7){
    //  res.end('Error: Password must be at least 7 characters')
    // }
    else {
      res.end('Error: Failed to sign in.')
    }
  });
});

  /*var thisisastring = "value"*/


module.exports = router;
