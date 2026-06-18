const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

// Added getWishlist to the import
const { addToWishlist, getWishlist } = require('../controllers/wishlistController');

router.post('/add', addToWishlist);

// Removed 'this.' so it uses the function directly
router.get('/:userId', getWishlist);
router.delete('/remove/:id', wishlistController.removeFromWishlist);

module.exports = router;