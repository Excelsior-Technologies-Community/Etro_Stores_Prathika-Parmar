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

    }
}

module.exports = UserModel;