const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Dis da home!!!');
});

module.exports = router;