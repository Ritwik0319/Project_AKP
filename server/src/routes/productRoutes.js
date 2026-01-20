const express = require('express');
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
    const products = await Product.find({}).populate('business').populate('category');
    res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id).populate('business').populate('category');

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
    const { name, price, description, image, brand, category, business, countInStock } = req.body;

    const product = new Product({
        name,
        price,
        user: req.user._id,
        image,
        brand,
        category,
        business,
        countInStock,
        numReviews: 0,
        description,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

module.exports = router;
