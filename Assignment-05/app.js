const express = require('express');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const router = require('./src/routes/api');
dotenv.config({ path: './config.env' });
const app = express();

// middlewares
app.use(express.json());
app.use(cors())
app.use(mongoSanitize());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// Apply the rate limiting middleware to all requests
app.use(limiter)

// mongoose connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/todo', (err) => {
    if (!err) {
        console.log('Mongoose connection successful.')
    } else {
        console.log('Mongoose connection failed!')
    }
});



app.use('/api/v1', router);

app.use('*', (req, res) => {
    res.status(404).json({ "message": "Not found!" });
})

// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}
app.use(errorHandler);

module.exports = app;