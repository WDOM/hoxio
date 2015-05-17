var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{username: 'test'}, {username: 'test1'}]);
});

module.exports = router;
