var express = require('express');
var router = express.Router();

/////////////////// G E T   H O M E   P A G E  /////////////////////

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mystery Hub' });
});

module.exports = router;
