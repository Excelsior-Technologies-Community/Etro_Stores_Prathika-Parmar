const express = require('express');
const router = express.Router();
const {searchProducts} = require('../controllers/productsController');

router.get('/search', searchProducts); // this creates the URL: /api/products/search

module.exports = router;