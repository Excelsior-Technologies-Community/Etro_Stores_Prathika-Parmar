const CartModel = require('../models/cartModel');

const cartController = {
    addToCart: (req, res) => {
        const cartData = req.body;

        CartModel.addItem(cartData, (err, result) => {
            if(err){
                console.error(err);
                return res.status(500).json({error: "Failed to add to cart"});
            }
            res.status(200).json({message: "Product successfully added to cart!"});
        }); 
    },
    
    // Moved getCart INSIDE the object so it exports correctly
    getCart: (req, res) => {
        const userId = req.params.userId;

        // Changed 'Cart' to 'CartModel' to match the import at the top
        CartModel.get(userId, (err, results) => {
            if (err) {
                console.error('Error fetching cart:', err);
                return res.status(500).json({ error: 'Failed to fetch cart' });
            }
            res.status(200).json(results);
        });
    }
};

module.exports = cartController;