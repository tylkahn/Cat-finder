var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('games'); /*All code for games is theoretical--there is no db
  for games yet, or a list of high scores; the idea is that the framework is in place for
  games to be inserted easily in the future.*/
  var gamename = req.body.gamename;
  usercollection.find( {gamename: gamename}, {}, function (e, gamefile) {
    res.render('games', {
      title: 'Express',
      currentgame: gamefile, /*Currentgame is the game name, in the form of "serverurl/gamename/", for access to the game-specific url,
      which is linked to a mongodb file for the game.*/
    });
  });
});

module.exports = router;
