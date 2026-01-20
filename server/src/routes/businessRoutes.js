const express = require('express');
const Business = require('../models/Business');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// @desc    Get all businesses
// @route   GET /api/businesses
// @access  Public
router.get('/', async (req, res) => {
    const businesses = await Business.find({});
    res.json(businesses);
});

// @desc    Create a business
// @route   POST /api/businesses
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
    const { name, slug, division, description } = req.body;

    const businessExists = await Business.findOne({ name });

    if (businessExists) {
        res.status(400);
        throw new Error('Business already exists');
    }

    const business = await Business.create({
        name,
        slug,
        division,
        description,
    });

    if (business) {
        res.status(201).json(business);
    } else {
        res.status(400);
        throw new Error('Invalid business data');
    }
});

module.exports = router;
