const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/product/:id', ProductController.show);
routes.post('/product', ProductController.post);
routes.put('/product/:id', ProductController.put);
routes.delete('/product/:id', ProductController.delete);

module.exports = routes;