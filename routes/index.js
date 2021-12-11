const express = require('express');
const router = express.Router();

// Set v1 router
router.use('/v1', require('./v1'));


module.exports = router;
