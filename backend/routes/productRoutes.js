const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Route to get all products
router.get('/', productController.getProducts);

// Route to ADD a new product (Admin Dashboard)
router.post('/add', productController.createProduct);

// Route to SEARCH products (MidHeader Live Search)
router.get('/search', productController.searchProducts);

module.exports = router;