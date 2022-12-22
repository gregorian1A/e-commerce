const express = require('express');
const {getProductsById, getAllProducts} = require('../controller/productControllers');

const router = express.Router();

//GET all products
router.get('/', getAllProducts)

//GET each individual product by id
router.get('/:id', getProductsById)

module.exports = router;