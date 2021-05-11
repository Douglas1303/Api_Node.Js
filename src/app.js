'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb+srv://ApiNode:244005@apinode.lv4wl.mongodb.net/test', { useNewUrlParser:true, useUnifiedTopology: true}); 

//Carregar os Models
const Product = require('./models/product'); 
const Costumer = require('./models/customer'); 
const Order = require('./models/order'); 

//Carregar as rotas
const indexRoute = require('./routes/index-route'); 
const productRoute = require('./routes/product-route'); 
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute); 
app.use('/customers', customerRoute); 
app.use('/orders', orderRoute);

module.exports = app;