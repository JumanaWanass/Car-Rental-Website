const express = require('express');
const router = express.Router();
const RepController = require('../controllers/reportsController');
const repController3 =require('../controllers/reportsController3');
const repController4 =require('../controllers/reportsController4');


router.post('/1',RepController.rep1);
router.post('/2',RepController.rep2);
router.post('/3',repController3.rep3);
router.post('/4',repController4.rep4);
router.post('/5',RepController.rep5);

module.exports = router;
