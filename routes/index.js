
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

var mongoose = require('mongoose');
var CandidateSchema =  new mongoose.Schema({
  name : String,
  votes : {type: Number, default: 0},
  selected : Number
});
var Candidate = mongoose.model('candidate', CandidateSchema);

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
  Candidate.find(function(err, candidates){
    if(err){return next(err);}
    res.json(candidates);
  });
  console.log("got candidates");
});


router.post('/candidates', function(req, res, next){
  var candidate = new Candidate(req.body);
  console.log(req.body);
  candidate.save(function(err,candidate){
    if(err){return next(err);}
    res.json(candidate);
    console.log("Posted to DB");
    console.log(candidate);
  });
});


router.param('candidate', function(req, res, next, id){
  var query = Candidate.findById(id);
  query.exec(function(err, candidate){
    if (err){return next(err);}
    if(!candidate){ return next(new Error("can't find candidate")); }
    req.candidate = candidate;
    return next();
  });

});



router.get('/candidates/:candidate', function(req, res){
  res.json(req.candidate);
});

router.delete('/comment', function(req, res, next){
  console.log("DELETE candidates route");
  //DateTime.remove({}, callback)
  Comment.remove({}, function(err){
  });
});

module.exports = router;
