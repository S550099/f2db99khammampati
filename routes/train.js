var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('train', { title: 'Search Results train' });
});
var express = require('express');
const train_controlers= require('../controllers/train');
var router = express.Router();
/* GET costumes */
router.get('/', train_controlers.train_view_all_Page );

module.exports = router;