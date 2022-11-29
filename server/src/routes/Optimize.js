const express = require('express');
const router = express.Router();

const optimizeController = require('../controllers/OptimizeController');

router.post('/', optimizeController.goldenSectionSearch);

module.exports = router;