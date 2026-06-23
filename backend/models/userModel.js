const db = require('../config/db');

const UserModel = {
    //check if email is exist or not 
    findByEmail: (email,callback) =>{
        const query = " SELECT * FROM users WHERE email = ? "
        db.query(query,[email],(err,results) => {
            callback(err,results);
        });
    },

    createUser: (name, email, hashedPassword, callback) => {
        const query = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
        db.query(query,[name, email, hashedPassword], (err, results) => {
            callback(err,results);
        });

    },

    getAllUsers: (callBack) => {
        // We select everything EXCEPT the password hash for safety
        const query = "SELECT id, name, email, created_at FROM users ORDER BY created_at DESC";
        db.query(query, (err, results) => {
            callBack(err, results);
        });
    }


};

module.exports = UserModel;