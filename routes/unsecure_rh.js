const express = require('express');
const router = express.Router();

//route links

//endpoint links
const home = require('./unsecure/home');

router.use('/home', home);

module.exports = router;