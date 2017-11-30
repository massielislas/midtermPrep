
var express = require('express');
var router = express.Router();
/*

var mongoose = require('mongoose'); //Adds mongoose as a usable dependency


mongoose.connect('mongodb://localhost/commentDB', { useMongoClient: true }); //Connects to a mongo database called "commentDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String,
Comment: String
});

var Comment = mongoose.model('Comment', commentSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});
*/



var candidates = [];
candidates.push({name : "Ryan", votes : 0, selected : 0});

/* GET comments from database */

router.get('/admin', function(req, res, next){
  res.sendFile("index.html", {root: "public"});
});

router.get('/voter', function(req, res, next){
  res.sendFile("voter.html", {root: "public"});
});

router.get('/candidates', function(req, res, next){
  res.json(candidates);
  console.log("GET candidates route");
  console.log(candidates);
});


router.post('/candidates', function(req, res, next){
  console.log("POST candidates route");
});

router.delete('/comment', function(req, res, next){
  console.log("DELETE candidates route");
  //DateTime.remove({}, callback)
  Comment.remove({}, function(err){
  });
});

module.exports = router;
