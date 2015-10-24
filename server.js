var express = require('express');
var port = process.env.PORT || 3000
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal= require('passport-local');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./model/db');
var blogModel = require('./model/post');
var blogRoutes = require('./routes/post');


var mongoose = require('mongoose');


var app = express();

var router = express.Router(); 


app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({secret:'ilovegoats'}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());

require('./routes/userRoutes.js')(app, passport);

require('./config/passport')(passport); 


app.set('port', (process.env.PORT || 3000));

app.use('/api', router);

app.use(express.static('public'));

app.use('/api/blog', blogRoutes);

app.use('/api/blogPost', blogRoutes);

app.get('/', function(req, res){
    res.readFile('index.html')
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
