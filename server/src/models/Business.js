const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    division: {
        type: String,
        required: true,
        enum: ['Associates', 'Agro', 'Other']
    },
    description: String,
    logo: String,
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;
