const express = require('express');
const router = express.Router();
const CarController = require('../controllers/CarController');

router.get('/', CarController.getAll);
router.get('/search', CarController.getByAttributes);
router.post('/', CarController.createCar);
router.delete('/search', CarController.deleteByAttributes);
router.put('/search', CarController.updateByAttributes);

module.exports = router;
