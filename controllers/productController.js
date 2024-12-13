const Product = require('../models/Product');


// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        // console.log(req.body);
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { sku, name, description, quantity, price } = req.body;
        const images = "Random Image Path";

        const newProduct = new Product({ sku, name, description, quantity, price, images });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit a product
const editProduct = async (req, res) => {
    try {
        const {sku, name, description, quantity, price } = req.body;
        const images = "Random Image Path";

        const product = await Product.findByIdAndUpdate(req.params.id, { name, description, quantity, price, images }, { new: true });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all Fav products
const getAllFav = async (req, res) => {
    try {
        const favouriteProducts = await Product.find({ favorite: true }); 
        res.status(200).json(favouriteProducts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Update single fav
const updateFavourite = async (req, res) => {
    console.log("Endpoint hit", req.params.id);
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        product.favorite = !product.favorite;
        await product.save();

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports = { getAllProducts, deleteProduct, addProduct, editProduct, getAllFav, updateFavourite };