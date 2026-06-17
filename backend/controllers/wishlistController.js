const Wishlist = require('../models/wishlistModel'); 

const addToWishlist = (req, res) => {
    const { userId, productId, name, price, image } = req.body;
    
    Wishlist.add(userId, productId, name, price, image, (err, result) => {
        if (err) {
            console.error('Error adding to wishlist:', err);
            return res.status(500).json({ error: 'Failed to add to wishlist' });
        }
        res.status(200).json({ message: 'Success! Added to wishlist.' });
    });
};

const getWishlist = (req, res) => {
    const userId = req.params.userId; 

    Wishlist.get(userId, (err, results) => {
        if (err) {
            console.error('Error fetching wishlist:', err);
            return res.status(500).json({ error: 'Failed to fetch wishlist' });
        }
        res.status(200).json(results); 
    });
};

// Fixed the export to include BOTH functions
module.exports = { addToWishlist, getWishlist };