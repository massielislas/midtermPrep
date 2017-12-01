var mongoose = require('mongoose');
var CandidateSchema =  new mongoose.Schema({
  name : String,
  votes : {type: Number, default: 0},
  selected : Number
});

CandidateSchema.methods.voting = function(cb) {
    this.votes += 1;
    this.save(cb);
};

mongoose.model('candidate', CandidateSchema);