// routers/EmployeeRouter.js
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController');

router.get('/', EmployeeController.getAll);
router.get('/search', EmployeeController.getByAttributes); 
router.post('/attributes', EmployeeController.getByAttributes);
router.delete('/attributes', EmployeeController.deleteByAttributes);
router.put('/attributes', EmployeeController.updateByAttributes);

module.exports = router;
