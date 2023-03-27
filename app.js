const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productsRoutes = require('./routes/products.routes');
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//routes
app.use('/api/v1/products', productsRoutes);

module.exports = app;
