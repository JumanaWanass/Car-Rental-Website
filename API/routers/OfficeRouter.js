// routers/OfficeRouter.js
const express = require('express');
const router = express.Router();
const OfficeController = require('../controllers/OfficeController');

router.get('/', OfficeController.getAll);
router.get('/:id', OfficeController.getByID);
router.get('/search', OfficeController.getByAttribute);
router.delete('/search', OfficeController.deleteByAttribute);
router.put('/search', OfficeController.updateByAttribute); 

module.exports = router;
