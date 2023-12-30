const express = require('express');
const router = express.Router();
const CarController = require('../controllers/CarController');

router.get('/', CarController.getAll);
router.get('/search', CarController.getByAttributes);
router.post('/create', CarController.createCar);  //
router.delete('/delete', CarController.deleteByAttributes);//
router.put('/search', CarController.updateByAttributes);
//router.post('/formPost',CarController.testPrint);
// router.get('/form',CarController.testPrint);

module.exports = router;
