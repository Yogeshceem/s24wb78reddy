var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('Holographs', { title: 'Search Results - holographs' });
});
var express = require('express');
const Holograph_controlers= require('../controllers/Holograph');
var router = express.Router();

router.get('/', Holograph_controlers.Holograph_view_all_Page );


module.exports = router;