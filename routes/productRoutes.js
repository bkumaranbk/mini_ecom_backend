const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/productController');

router.get('/', getAllProducts); // Get all products

module.exports = router;