var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('train', { title: 'Search Results train' });
});
var express = require('express');
const train_controlers = require('../controllers/train');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET train */
router.get('/', train_controlers.train_view_all_Page);
module.exports = router;
// GET request for one train.
router.get('/train/:id', train_controlers.train_detail);
/* GET detail train page */
router.get('/detail',secured, train_controlers.train_view_one_Page);
/* GET create train page */
router.get('/create',secured, train_controlers.train_create_Page);
/* GET create update page */
router.get('/update',secured, train_controlers.train_update_Page);
/* GET delete train page */
router.get('/delete',secured,train_controlers.train_delete_Page);