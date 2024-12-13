const express = require('express');
const router = express.Router();
const { getAllProducts, deleteProduct, addProduct, editProduct } = require('../controllers/productController');
const multer = require('multer');

// Multer setup for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/add', upload.array('images', 5), addProduct); // Adding multiple images
router.get('/', getAllProducts); // Get all products
router.delete('/delete/:id', deleteProduct); // Delete product
router.put('/edit/:id', upload.array('images', 5), editProduct); // Edit product


module.exports = router;