const db = require('../config/db');

const ProductModel = {
    // 1. Get all products
    getAll: (callBack) => {
        const query = "SELECT * FROM products ORDER BY id DESC";
        db.query(query, (err, results) => {
            callBack(err, results);
        });
    },

    // 2. Add a new product (Strictly 6 parameters)
    addProduct: (name, price, category, image, callBack) => {
        const query = "INSERT INTO products (name, price, category, image) VALUES (?, ?, ?, ?)";
        db.query(query, [name, price, category, image], (err, result) => {
            callBack(err, result);
        });
    },

    // 3. Search products
    search: (searchQuery, callBack) => {
        const sql = "SELECT * FROM products WHERE name LIKE ? LIMIT 5";
        db.query(sql, [`%${searchQuery}%`], (err, results) => {
            callBack(err, results);
        });
    },

    update: (id, name, price, category, image, callBack) => {
        // 🔥 RAW TEXT INJECTION (Bypassing the question-mark engine entirely)
        const bruteForceSQL = `UPDATE products SET name='${name}', price=${price}, category='${category}', image='${image}' WHERE id=${id}`;

        console.log("\n🚀 SHIPPING RAW STRING:", bruteForceSQL);

        db.query(bruteForceSQL, (err, results) => {
            callBack(err, results);
        });
    },

    delete: (id, callBack) => {
        const query = "DELETE FROM products WHERE id=?"
        db.query(query, [id], (err,results) => {
            callBack(err, results);
        });
    }
};

module.exports = ProductModel;