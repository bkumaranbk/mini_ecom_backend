const Product = require('../models/Product');

// Get all products
const getAllProducts = async (req, res) => {
    return res.json({"WELCOME": `Test Backend working or not`});
  };


module.exports = {getAllProducts};