const express = require('express');
const morgan = require('morgan');
const productsRoutes = require('./routes/products.routes');
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/v1/products', productsRoutes);

module.exports = app;
