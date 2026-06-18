const db = require('../config/db');

const CartModel = {
    // 1. Add item to cart
    addItem: (cartData, callBack) => {
        const query = "INSERT INTO cart (user_id, product_id, product_name, price, image) VALUES (?, ?, ?, ?, ?)";
        const values = [cartData.userId, cartData.productId, cartData.name, cartData.price, cartData.image];

        db.query(query, values, (err, result) => {
            callBack(err, result);
        });
    },

    // 2. Get all items in cart for a specific user
    get: (userId, callBack) => {
        const query = "SELECT * FROM cart WHERE user_id = ? ORDER BY created_at DESC";
        
        db.query(query, [userId], (err, result) => {
            callBack(err, result);
        });
    },

    removeItem: (cartItemId, callBack) => {
        const query = "DELETE FROM cart WHERE id = ?";
        db.query(query, [cartItemId], (err, result) => {
            callBack(err, result);
        });
    }
};

module.exports = CartModel;