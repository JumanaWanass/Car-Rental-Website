const express = require('express');
const router = express.Router();
const RepController = require('../controllers/reportsController');
const repController3 =require('../controllers/reportsController3');
const repController4 =require('../controllers/reportsController4');
const multer = require('multer');

module.exports = function (upload) {
    router.get('/report/1',RepController.rep1);
    router.get('/report/2',RepController.rep2);
    router.get('/report/3',repController3.rep3);
    router.get('/report/4',repController4.rep4);
    router.get('/report/5',RepController.rep5);
    return router;
}