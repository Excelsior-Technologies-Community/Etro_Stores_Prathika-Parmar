const db = require('../config/db');

const searchProducts = (req, res) => {
    // Grab the search word from the URL (e.g., ?q=television)
    const searchQuery = req.query.q; 
    
    // If the box is empty, send back an empty array
    if (!searchQuery) return res.status(200).json([]);

    // The % symbols mean "find this word anywhere in the product name"
    const sql = `SELECT * FROM products WHERE name LIKE ? LIMIT 5`;
    const value = [`%${searchQuery}%`];

    db.query(sql, value, (err, results) => {
        if (err) {
            console.error('Search error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
};

module.exports = { searchProducts };