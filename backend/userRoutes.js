const express = require('express');
const userController = require('./userController');

const router = express.Router();

router.get('/profile', userController.getProfile);
router.post('/update', userController.updateProfile);
router.delete('/delete', userController.deleteAccount);

module.exports = router;
