// routers/CustomerRouter.js
const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');

router.get('/', CustomerController.getAll);
router.get('/search', CustomerController.getByAttributes); 
router.post('/', CustomerController.createCustomer);
router.delete('/attributes', CustomerController.deleteByAttributes);
router.put('/attributes', CustomerController.updateByAttributes);

module.exports = router;
