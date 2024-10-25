// routes/calculateRoutes.js

const express = require('express');
const router = express.Router();
const calculateController = require('../controllers/calculateController');

// Basic operations
router.post('/add', calculateController.add);
router.post('/subtract', calculateController.subtract);
router.post('/multiply', calculateController.multiply);
router.post('/divide', calculateController.divide);

// Rounding operations
router.post('/nearest-10s', calculateController.roundToTens);
router.post('/nearest-100s', calculateController.roundToHundreds);
router.post('/nearest-1000s', calculateController.roundToThousands);
router.post('/nearest-10th', calculateController.roundToTenths);
router.post('/nearest-100th', calculateController.roundToHundredths);
router.post('/nearest-1000th', calculateController.roundToThousandths);


module.exports = router;
