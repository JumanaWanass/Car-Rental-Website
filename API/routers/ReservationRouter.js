// routers/ReservationRouter.js
const express = require('express');
const router = express.Router();
const ReservationController = require('../controllers/ReservationController');

router.get('/getAll', ReservationController.getAll);
router.post('/getByAttributes', ReservationController.getByAttributes);
router.post('/deleteByAttributes', ReservationController.deleteByAttributes);
router.post('/updateByAttributes', ReservationController.updateByAttributes);
router.get('/search', ReservationController.getByAttributes); 
router.delete('/search', ReservationController.deleteByAttributes); 
router.put('/search', ReservationController.updateByAttributes); 

module.exports = router;
