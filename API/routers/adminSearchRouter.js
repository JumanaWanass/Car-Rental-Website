const express = require('express');
const router = express.Router();
const adminSearchController = require('../controllers/adminSearchController');
const multer = require('multer');

module.exports = function (upload) {
    router.get('/adsearch', adminSearchController.getByAttributes);
    return router;
}