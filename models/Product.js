const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  favorite: { type: Boolean, default: false },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
