var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config() // dotenv for .env files
var PORT = process.env.PORT || 3008;


var indexRouter = require('./routes/index'); // example routes!
var usersRouter = require('./routes/users'); // example routes!
var loggedRouter = require('./routes/logged'); // example routes!



var spoitfy_auth_Router = require('./routes/spotify_auth'); // route for spotify auth login

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', cors(), spoitfy_auth_Router) // this is the endpoint set with cors!
app.use('/logged', loggedRouter); // REDIRECTURI

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const AuthRoutes = require('./routes/authRoutes.js');


// listen on specified port we have 1 param, and a function. we use the port param to set the server.
app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", process.env.PORT);
})

module.exports = app; // export the bad boi 
