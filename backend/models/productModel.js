const db = require('../config/db');

const ProductModel = {
    // 1. Get all products (Admin Dashboard)
    getAll: (callBack) => {
        const query = "SELECT * FROM products";
        db.query(query, (err, results) => {
            callBack(err, results);
        });
    },

    // 2. Add a new product (Admin Dashboard)
    addProduct: (name, price, category, image, desc, callBack) => {
        const query = "INSERT INTO products (name, price, category, image, description) VALUES (?, ?, ?, ?, ?)";
        db.query(query, [name, price, category, image, desc], (err, result) => {
            callBack(err, result);
        });
    },

    // 3. NEW: Search products (Your Live Search)
    search: (searchQuery, callBack) => {
        const sql = `SELECT * FROM products WHERE name LIKE ? LIMIT 5`;
        const value = [`%${searchQuery}%`];
        db.query(sql, value, (err, results) => {
            callBack(err, results);
        });
    }
};

module.exports = ProductModel;