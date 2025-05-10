const express = require('express');
const router = express.Router()
const {getUserData, updateUserStatus} = require('../controllers/adminController');

router.get('/user', getUserData)
router.patch('/user/status/:id', updateUserStatus)

module.exports = router