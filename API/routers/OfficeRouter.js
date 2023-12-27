const express = require('express');
const officeController = require('../controllers/OfficeController');
const router = express.Router();

router.get('/all', officeController.getAll);
router.get('/id/:id', officeController.getByID); 
router.get('/tel/:tel', officeController.getByPhone); 


module.exports = router;