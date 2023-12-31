// routers/ReservationRouter.js
const express = require('express');
const router = express.Router();
const ReservationController = require('../controllers/ReservationController');

router.get('/', ReservationController.getAll);

// Dynamic querying routes
router.post('/', ReservationController.createReservation);
router.post('/deleteByAttributes', ReservationController.deleteByAttributes);
router.post('/updateByAttributes', ReservationController.updateByAttributes);

router.get('/search', ReservationController.getByAttributes); 

router.get('/availableCars', ReservationController.getAvailableCars);

module.exports = router;
