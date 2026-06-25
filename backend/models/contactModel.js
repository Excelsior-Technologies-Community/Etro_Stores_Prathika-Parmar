const db = require('../config/db');

const Contact = {

    create: (name, email, phone, message, callback) => {
        const query = "CALL sp_save_contact(?,?,?,?)";
        db.query(query, [name, email, phone, message], (err, results) =>{
           callback(err,results);
        });
    },

    getAll: (callback) => {
        const query = "SELECT * FROM contacts ORDER BY created_at DESC";
        db.query(query, (err, results) => {
            callback(err,results);
        });
    },

    deletebyId: (id, callback) => {
        const query = "DELETE FROM contacts WHERE id = ?";
        db.query(query, [id], (err, results) => {
            callback(err,results);
        });
    }
};

module.exports = Contact;
