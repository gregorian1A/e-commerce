const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const Products = await Product.find({});

        res.json(Products)
    } catch (error) {
        console.error(error)

        res.status(500).json({message: 'Server error'})
    }
}

const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.error(error)

        res.status(500).json({message: 'Server error'})
    }
}

module.exports = {
    getAllProducts,
    getProductsById
}