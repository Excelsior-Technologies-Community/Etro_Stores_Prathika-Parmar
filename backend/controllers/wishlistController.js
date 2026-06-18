const Wishlist = require('../models/wishlistModel'); 

const wishlistController = {
    
    // 1. ADD ITEM
    addToWishlist: (req, res) => {
        const { userId, productId, name, price, image } = req.body;
        
        Wishlist.add(userId, productId, name, price, image, (err, result) => {
            if (err) {
                console.error('Error adding to wishlist:', err);
                return res.status(500).json({ error: 'Failed to add to wishlist' });
            }
            res.status(200).json({ message: 'Success! Added to wishlist.' });
        });
    },

    // 2. GET ITEMS
    getWishlist: (req, res) => {
        const userId = req.params.userId; 

        Wishlist.get(userId, (err, results) => {
            if (err) {
                console.error('Error fetching wishlist:', err);
                return res.status(500).json({ error: 'Failed to fetch wishlist' });
            }
            res.status(200).json(results); 
        });
    },

    // 3. REMOVE ITEM
    removeFromWishlist: (req, res) => {
        const itemId = req.params.id; 

        Wishlist.removeItem(itemId, (err, result) => {
            if (err) {
                console.error('Error removing item:', err);
                return res.status(500).json({ error: 'Failed to remove item' });
            }
            res.status(200).json({ message: 'Item successfully removed' });
        });
    }
};

// Export the entire object so your routes file can use all 3 functions!
module.exports = wishlistController;