const db = require('../config/db');

const Wishlist = {
    add: (userId, productId, name, price, image, callback) => {
        const query = 'INSERT INTO wishlist (user_id, product_id, product_name, price, image) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [userId, productId, name, price, image], callback);
    },
    get: (userId, callback) => {
        const query = 'SELECT * FROM wishlist WHERE user_id = ? ORDER BY created_at DESC';
        db.query(query, [userId], callback);
    }
};

module.exports = Wishlist;