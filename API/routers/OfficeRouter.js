// routers/OfficeRouter.js
const express = require('express');
const router = express.Router();
const OfficeController = require('../controllers/OfficeController');

router.get('/', OfficeController.getAll)
router.get('/search', OfficeController.getByAttributes);
router.post('/', OfficeController.createOffice);
router.delete('/search', OfficeController.deleteByAttributes);
router.put('/search', OfficeController.updateByAttributes); 

module.exports = router;
