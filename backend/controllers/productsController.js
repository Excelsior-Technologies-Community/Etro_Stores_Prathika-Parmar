const ProductModel = require('../models/productModel');

const productController = {
    
    // 1. Get all products
    getProducts: (req, res) => {
        ProductModel.getAll((err, results) => {
            if (err) return res.status(500).json({ error: "Database error" });
            res.status(200).json(results);
        });
    },

    // 2. Add a new product
    createProduct: (req, res) => {
        const { name, price, category, image, desc } = req.body;
        ProductModel.addProduct(name, price, category, image, desc, (err, result) => {
            if (err) return res.status(500).json({ error: "Failed to add product" });
            res.status(201).json({ message: "Product added successfully!" });
        });
    },

    // 3. NEW: Search Products
    searchProducts: (req, res) => {
        const searchQuery = req.query.q; 
        
        // Early exit if the search box is empty
        if (!searchQuery) return res.status(200).json([]);

        ProductModel.search(searchQuery, (err, results) => {
            if (err) {
                console.error('Search error:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(200).json(results);
        });
    }
};

module.exports = productController;