const express = require('express');
const controller = require('../controllers/controllerTemplate');
const middleware = require('../middleware/middleware');
const router = express.Router();

// Authentication
router.post('/url', middleware(/*Can be skipped*/), async (req, res) => {
        res.status(200).json({accessToken: jwtToken});
        res.status(401).json({message: "login failed"});
});

// any router after this will require middleware
router.use(authenticate);


router.get('/all', controller.getAll);
router.get('/:id', controller.findById); // /:id means there will be id after / like this localhost::home/123


module.exports = router;