const express = require('express');
const router = express.Router();

const testController = require('../controllers/TestController');

router.post('/', testController.test);

module.exports = router;