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

//Carregar as rotas
const indexRoute = require('./routes/index-route'); 
const productRoute = require('./routes/product-route'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute); 

module.exports = app;