const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Dis da secure home!!!');
});

router.get('/*', (req, res) => {
    res.send('404 not found!');
})

module.exports = router;