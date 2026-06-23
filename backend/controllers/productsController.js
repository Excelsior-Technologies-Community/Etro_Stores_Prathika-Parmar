const ProductModel = require('../models/productModel');

const productController = {
    // 1. Get all products
    getProducts: (req, res) => {
        ProductModel.getAll((err, results) => {
            if (err) return res.status(500).json({ error: "Database error" });
            res.status(200).json(results);
        });
    },

    // 2. Add a new product (STRICTLY 5 ARGUMENTS PASSED!)
    createProduct: (req, res) => {
        const { name, price, category, image } = req.body; // <-- Dropped desc!

        // Passing 1. name, 2. price, 3. category, 4. image, 5. callback
        ProductModel.addProduct(name, price, category, image, (err, result) => {
            if (err) {
                console.error("Database Insert Error:", err.sqlMessage || err);
                return res.status(500).json({ error: "Failed to add product" });
            }
            res.status(201).json({ message: "Product added successfully!" });
        });
    },

    // 3. Search Products
    searchProducts: (req, res) => {
        const searchQuery = req.query.q; 
        if (!searchQuery) return res.status(200).json([]);

        ProductModel.search(searchQuery, (err, results) => {
            if (err) {
                console.error('Search error:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(200).json(results);
        });
    },

    updateProduct: (req, res) => {
        const { id } = req.params;
        const { name, price, category, image } = req.body;

        ProductModel.update(id, name, price, category, image, (err, result) => {
            if (err) {
                console.log("\n=============================================");
                console.log(`🚨 MYSQL REFUSED TO UPDATE PRODUCT #${id}!`);
                console.log("REASON GIVEN:", err.sqlMessage || err);
                console.log("=============================================\n");

                return res.status(500).json({ error: "Failed to update" });
            }
            res.status(200).json({ message: "Product updated!" });
        });
    },

    deleteProducts: (req, res) =>{
        const { id } = req.params;

        ProductModel.delete(id, (err,results) => {
            if(err) return res.status(500).json({error: "failed to delete"});
            res.status(200).json({message: 'Deleted Successfully'});
        });
    }
};

module.exports = productController;