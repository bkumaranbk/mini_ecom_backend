const express = require('express');
const router = express.Router();
const { getAllProducts, deleteProduct, addProduct } = require('../controllers/productController');
const multer = require('multer');


router.post('/add', addProduct); // Adding multiple images
router.get('/', getAllProducts); // Get all products
router.delete('/delete/:id', deleteProduct); // Delete product

module.exports = router;