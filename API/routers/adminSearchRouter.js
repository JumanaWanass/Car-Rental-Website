const express = require('express');
const router = express.Router();
const adminSearchC = require('../controllers/adminSearchController');


router.get('/search', adminSearchC.getByAttributes);

module.exports = router;
