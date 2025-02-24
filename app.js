const express = require('express');
const app = express();

const PORT = 3000;

//route links
const unsecure_routeHandler = require('./routes/unsecure_rh');
const secure_routeHandler = require('./routes/secure_rh');

const timeLog = (req, res, next) => {
    console.log('Accessed app at: ', Date.now(), ' by: ', req.socket.remoteAddress);
    next();
}

app.use(timeLog);

console.log('Initializing routes...');
app.use('/u', unsecure_routeHandler);
app.use('/s', secure_routeHandler);

app.listen(PORT);
console.log('Server started on port: ', PORT);