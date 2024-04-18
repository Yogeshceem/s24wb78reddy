var express = require('express');
var router = express.Router();
const Holograph_controller = require('../controllers/Holograph');

/* GET all Holographs */
router.get('/', Holograph_controller.Holograph_view_all_Page);

/* GET detail view for a specific Holograph */
router.get('/detail', Holograph_controller.Holograph_view_one_Page);

/* GET create Holograph form */
router.get('/create', Holograph_controller.Holograph_create_Page);

/* GET update Holograph form */
router.get('/update', Holograph_controller.Holograph_update_Page);

/* GET delete Holograph form */
router.get('/delete', Holograph_controller.Holograph_delete_Page);

module.exports = router;
