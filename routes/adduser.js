var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('users');
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  var email=req.body.email;
  usercollection.find( {firstname: firstname}, {}, function (e, existingusers) {
    var numusers = existingusers.length
    if (firstname != "" && numusers == 0) {
      usercollection.insert({
        firstname: firstname, lastname: lastname, email: email
      });
    }
    console.log(usercollection);
    console.log(existingusers);
    console.log(numusers);
    /*res.render('success', {
      message: 'your user was created successfully!',
    });*/
    if (firstname != "" && numusers == 0){
      res.end('Success!');
    }
    else {
      res.end('Error: Not a valid user')
    }
  });
});

  /*var thisisastring = "value"*/


module.exports = router;
