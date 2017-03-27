var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('userinfo');
  var username=req.body.username;
  var password=req.body.password;
//  var pwlength=password.length
  usercollection.find( {username: username}, {}, function (e, existingusers) {
    var numusers = existingusers.length
    if (username != "" && numusers == 0) {
      usercollection.insert({
        username: username, password: password, loggedin: 0
      });
    }
    console.log(usercollection);
    console.log(existingusers);
    console.log(numusers);
    /*res.render('success', {
      message: 'your user was created successfully!',
    });*/
    if (username != "" && numusers == 0 /*&& pwlength > 6*/){
      res.end('Success! Thank you for signing up!');
    }
    // else if (pwlength < 7){
    //  res.end('Error: Password must be at least 7 characters')
    // }
    else {
      res.end('Error: Not a valid user (Username may not be available)')
    }
  });
});

  /*var thisisastring = "value"*/


module.exports = router;
