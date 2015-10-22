var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
//var db = require('./model/db');
var blogModel = require('./model/post');
var blogRoutes = require('./routes/post');

var app = express();

var router = express.Router();              

app.set('port', (process.env.PORT || 3000));

app.use('/api', router);

app.use(express.static('public'));

//app.use('/api/blog', blogRoutes);

app.get('/', function(req, res){
    res.readFile('index.html')
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
