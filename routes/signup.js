var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', {
    title: 'Express',
    bodytext: 'Sign up is below'
  });
});

module.exports = router;
