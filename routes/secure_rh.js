const express = require('express');
const router = express.Router();

const api = require('./secure/api_rh');

router.use('/api', api);

module.exports = router;