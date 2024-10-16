const express = require('express');
const calculate = require('./calculateController'); // Adjust path as necessary

const router = express.Router();

router.post('/api/calculate/:operation', calculate);

module.exports = router;
