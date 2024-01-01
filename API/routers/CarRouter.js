const express = require('express');
const router = express.Router();
const CarController = require('../controllers/CarController');

module.exports = function (upload) {
    router.get('/', CarController.getAll);
    router.get('/search', CarController.getByAttributes);
    router.post('/create', upload.single("photo"),  CarController.createCar);  
    router.delete('/delete', CarController.deleteByAttributes);
    router.put('/search', CarController.updateByAttributes);
    router.post('/changeCarStatus', CarController.changeStat);
    router.get('/make-model-combinations', CarController.getUniqueMakeModelCombinations); // New endpoint

    // router.post('/formPost',CarController.testPrint);
    // router.get('/form',CarController.testPrint);
    return router;
}