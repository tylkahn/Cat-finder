var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var db = req.db;
  var blogpostcollection = db.get('blogposts');
  var usercollection = db.get('users');
  var firstname=req.body.firstname;
  var usercontent=req.body.usercontent;
  var user = usercollection.find({name: {firstname}});
  var id = user._id;
//  console.log user;
  if (firstname != "") {
    blogpostcollection.insert({
      firstname: firstname, content : usercontent
    });
  }
  /*res.render('success', {
    message: 'your user was created successfully!',
  });*/
  res.end('Success!');
});
  /*var thisisastring = "value"*/

  module.exports = router;
