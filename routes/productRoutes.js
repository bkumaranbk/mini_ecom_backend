const express = require('express');
const router = express.Router();
const {getAllProducts, deleteProduct} = require('../controllers/productController');

router.get('/', getAllProducts); // Get all products
router.get('/delete/:id', deleteProduct); // Delete product

module.exports = router;