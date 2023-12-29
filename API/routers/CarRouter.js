const express = require('express');
const router = express.Router();
const CarController = require('../controllers/CarController');

router.get('/', CarController.getAll);
router.post('/attributes', CarController.getByAttributes);
router.delete('/attributes', CarController.deleteByAttributes);
router.put('/attributes', CarController.updateByAttributes);

// Add a new route to get a car by any attribute
router.get('/search', CarController.getByAttributes);
// Update the method to use GET instead of POST for the new route
router.get('/search', CarController.getByAttributes);

module.exports = router;
