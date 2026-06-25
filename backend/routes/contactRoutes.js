const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/add', contactController.submitForm);
router.get('/', contactController.getMessages);
router.delete('/:id', contactController.deleteMessage);

module.exports = router;