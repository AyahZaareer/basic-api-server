'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const clothesRoute = require('./routes/clothes');
const foodRoute = require('./routes/food');

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(logger);

app.use('/api/vi/clothes', clothesRoute);
app.use('/api/vi/food', foodRoute);

app.get('/', (req, res) => {
    res.send('Holle from server');
})

app.get('/bad', (req, res) => {

    throw new Error('There is a wrong');
})
app.get('/person', validator, (req, res) => {
    const output = { name: req.query.name };
    res.json(output);
})

app.use('*', notFound);
app.use(errorHandler);


module.exports = {
    server: app,
    start: (port) => {

        app.listen(port, () => console.log(`server is listening on ${port}`));
    }
}