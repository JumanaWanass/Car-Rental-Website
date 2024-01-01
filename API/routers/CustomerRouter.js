// routers/CustomerRouter.js
const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');

router.get('/', CustomerController.getAll);
router.get('/search', CustomerController.getByAttributes); 
router.post('/', CustomerController.createCustomer);
router.delete('/attributes', CustomerController.deleteByAttributes);
router.put('/attributes', CustomerController.updateByAttributes);
router.post('/login', CustomerController.login);
router.post('/register', CustomerController.createCustomer);

module.exports = router;
