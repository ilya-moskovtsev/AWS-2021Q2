const express = require('express');
const ProductController = require('../controllers/product.controller');

const router = express.Router();
const productController = new ProductController();

router.param('product_id', productController.findById());

router.get('/:product_id', productController.getProduct());

router.put('/:product_id', productController.update());

module.exports = router;
