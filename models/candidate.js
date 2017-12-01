CandidateSchema.methods.votes = function(cb) {
    this.votes += 1;
    this.save(cb);
  };