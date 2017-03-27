var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('games');
  var gamename = req.body.gamename;
  usercollection.find( {gamename: gamename}, {}, function (e, gamescores) {
    res.render('leaderboard', {
      title: 'Express',
      gamescores: gamescores, /*Scores are kept in a db entry for every game, and updated by the game files.
      This requests the games scores from the db and renders them.*/
    });
  });
});

module.exports = router;
