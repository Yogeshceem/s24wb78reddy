// Inside grid.js

const express = require('express');
const router = express.Router();

// GET /grid endpoint handler
router.get('/', function(req, res, next) {
  // Access query parameters
  let query = req.query;
  
  // Log query values on the server console
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);

  // Render grid.pug with title and query object
  res.render('grid', { title: 'Grid Display', query: query });
});

module.exports = router;
