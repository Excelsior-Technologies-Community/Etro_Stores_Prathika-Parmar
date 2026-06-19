const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {

    // register new user 
    register: async(req, res) => {
        const {name, email, password} = req.body;

        try{

            //check if user alredy exist
            UserModel.findByEmail(email, async(err,results) => {
                if(err) return res.status(500).json({error: "Databse Error"});
                if(results.length > 0) return res.status(400).json({error: "Email already in use "});

            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            //save the database
            UserModel.createUser(name, email, hashedPassword, (err, results) => {
                if(err) return res.status(500).json({error: 'failed to create user'});
                res.status(201).json({mesage: 'registration successful'});
                
            } );
                
            });

        }catch (error) {
            res.status(500).json({error: "Server error"});
        }
    },

    login: async(req,res) => {
        const {email, password} = req.body;

        try{

            //find user in database 
            UserModel.findByEmail(email, async(err, results) => {
                if(err) return res.status(500).json({error:"database error"});
                if(results.length === 0) return res.status(404).josn({error: "User Not Found"});

                const user = results[0];

                // match typed password with hashed password in db 
                const isMatch = await bcrypt.compare(password, user.password);
                if(!isMatch) return res.status(401).json({error: "Incorrect Password"});
                res.status(200).json({
                    message: "Login successful",
                    user: { id: user.id, name: user.name, email: user.email}
                });
            });
        }catch(error){
            res.status(500).json({error: 'Server error'});
        }
    }
};

module.exports = userController;