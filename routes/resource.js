var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Holograph_controller = require('../controllers/Holograph');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Holograph ROUTES ///
// POST request for creating a Holograph.
router.post('/Holograph', Holograph_controller.Holograph_create_post);
// DELETE request to delete Holograph.
router.delete('/Holograph/:id', Holograph_controller.Holograph_delete);
// PUT request to update Holograph.
router.put('/Holograph/:id', Holograph_controller.Holograph_update_put);
// GET request for one Holograph.
router.get('/Holograph/:id', Holograph_controller.Holograph_detail);
// GET request for list of all Holograph items.
router.get('/Holograph', Holograph_controller.Holograph_list);
module.exports = router;