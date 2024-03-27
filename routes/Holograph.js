const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('holographs', { title: 'Search Results - Holographs' });
});

module.exports = router;
