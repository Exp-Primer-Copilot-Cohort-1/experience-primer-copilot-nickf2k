// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;

// connect to mongoDB server
db.on('error', console.error);
db.once('open', function(){
    // connected to mongodb server
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');

// define model
var Comment = require('./models/comment');

// define router
var router = require('./routes')(app, Comment);

// run server
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});