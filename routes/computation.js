var express = require('express');
var router = express.Router();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var x = getRandomInt(0, 100);
  var y = getRandomInt(0, 100);
  var pwr = Math.atan(x)  
  res.send('Math.atan() applied to ' + x + ' is ' + pwr);
});

module.exports = router;