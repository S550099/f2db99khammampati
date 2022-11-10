var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var train_controller = require('../controllers/train');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/train', train_controller.train_create_post);
// DELETE request to delete Costume.
router.delete('/train/:id', train_controller.train_delete);
// PUT request to update Costume.
router.put('/train/:id', train_controller.train_update_put);
// GET request for one train.
router.get('/train/:id', train_controller.train_detail);
// GET request for list of all train items.
router.get('/train', train_controller.train_list);
module.exports = router;