var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var login = require('./routes/login');
var signup = require('./routes/signup');
var adduser = require('./routes/adduser');
var userlogin = require('./routes/userlogin');
var games = require('./routes/games');
var leaderboard = require('./routes/leaderboard');
//var leaders = require('./routes/leaders');
var mongo = require('mongodb');
var monk = require('monk');

var dbaddress = 'localhost:27017/users'
//var dbaddress = process.env.MONGO_URL;
// if (! dbaddress) {
//   throw new Error("No MONGO_URL environment variable set!")
// }
console.log('Using DB Address: ' + dbaddress);
var db = monk(dbaddress);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/login', login);
app.use('/signup', signup);
app.use('/adduser', adduser);
app.use('/userlogin', userlogin);
app.use('/games', games);
app.use('/leaderboard', leaderboard);
//app.use('/leaders', leaders);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
