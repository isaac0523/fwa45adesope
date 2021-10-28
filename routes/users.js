var express = require('express');
var router = express.Router();
let value = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 1;
  res.send(`User acessess are: ${value}`);
});

module.exports = router;
