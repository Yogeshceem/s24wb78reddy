const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('Holographs', { title: 'Search Results - holographs' });
});

module.exports = router;
