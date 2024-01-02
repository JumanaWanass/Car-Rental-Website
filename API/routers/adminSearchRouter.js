const express = require('express');
const router = express.Router();
const adminSearchController = require('../controllers/adminSearchController');


router.get('/search', adminSearchController.getByAttributes);
router.get('/available', adminSearchController.getAllAvailableCars);


module.exports = router;
