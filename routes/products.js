const express = require('express');
const router = express.Router();

const Products = require('../models/products');

// Get all products
router.get('/', async (rej, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new product
router.post('/', async (req, res) => {
  const product = new Products({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update product
router.patch('/:id', getProduct, async (req, res) => {
  // update values if available
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.image != null) {
    res.product.image = req.body.image;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete product
router.delete('/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: 'Deleted product' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Products.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
