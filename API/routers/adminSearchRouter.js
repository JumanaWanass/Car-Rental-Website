const express = require('express');
const router = express.Router();
const adminSearchC = require('../controllers/adminSearchController');


router.get('/search', adminSearchController.getByAttributes);
router.get('/available', adminSearchController.getAllAvailableCars);


module.exports = router;
