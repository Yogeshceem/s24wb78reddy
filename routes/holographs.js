var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Holograph', { title: 'Search Results Holograph' });
});

var express = require('express');
const Holograph_controlers= require('../controllers/Holograph');
var router = express.Router();

router.get('/', Holograph_controlers.Holograph_view_all_Page );

/* GET detail costume page */
router.get('/detail', Holograph_controlers.Holograph_view_one_Page);

/* GET create costume page */
router.get('/create', Holograph_controlers.Holograph_create_Page);

/* GET create update page */
router.get('/update', Holograph_controlers.Holograph_update_Page);

/* GET delete costume page */
router.get('/delete', Holograph_controlers.Holograph_delete_Page);

module.exports = router;