const Contact = require('../models/contactModel');

const contactController = {
    // post logic
    submitForm: (req,res) => {
        const {name, email, phone, message} = req.body;

        if(!name || !email || !phone || !message){
            return res.status(400).json({error: "all field are required.."});
        }

        Contact.create(name, email, phone, message, (err, results) => {
            if(err) return res.status(500).json({error: 'database error', details: err.message });
            res.status(201).json({message: 'Form successfully submitted '});
        });
    },

    getMessages: (req,res) => {
        
        Contact.getAll((err,results) => {
            if(err) return res.status(500).json({error: 'database error'});
            res.status(200).json(results);
        });
    },

    deleteMessage: (req,res) => {

        const {id} = req.params;
        Contact.deletebyId(id, (err,results) => {
            if(err) return res.status(500).json({error: 'databse error'});
            res.status(200).json({message: 'Message deleted successfully'});
        });

    }
};

module.exports = contactController;