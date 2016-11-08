var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  var db = req.db;
  var blogpostcollection = db.get('blogposts');
  console.log (blogpostcollection);
  blogpostcollection.find({}, {}, function (e, blogpostlist) {
    res.render('blogposts', {
      title: 'Express',
      bodytext: 'This is the blogposts page',
      content: blogpostlist
    });
  });
});

module.exports = router;
