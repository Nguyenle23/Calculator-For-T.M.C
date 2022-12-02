const express = require('express');
const router = express.Router();

const optimizeController = require('../controllers/OptimizeController');

router.post('/goldenSectionSearch', optimizeController.goldenSectionSearch);
router.post('/parabolicInterpolation', optimizeController.parabolicInterpolation);
router.post('/newtonMethod', optimizeController.newtonMethod);

module.exports = router;