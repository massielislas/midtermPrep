var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.sendFile('index', { root: 'public' });
});

router.get('/voter', function(req, res, next) {
  res.sendFile('voter.html', { root: 'public' });
});

module.exports = router;
