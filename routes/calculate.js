// routes/calculate.js
const express = require('express');
const router = express.Router();
const calculateController = require('../controllers/calculateController');

// Define routes and link them to the controller methods
router.post('/add', calculateController.add);
router.post('/subtract', calculateController.subtract);
router.post('/multiply', calculateController.multiply);
router.post('/divide', calculateController.divide);
router.post('/round-to-tens', calculateController.roundToTens);
router.post('/round-to-hundreds', calculateController.roundToHundreds);
router.post('/round-to-thousands', calculateController.roundToThousands);
router.post('/round-to-tenths', calculateController.roundToTenths);
router.post('/round-to-hundredths', calculateController.roundToHundredths);
router.post('/round-to-thousandths', calculateController.roundToThousandths);

module.exports = router;
