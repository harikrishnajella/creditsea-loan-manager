const express = require('express');
const router = express.Router()
const {getUserData, createUserData} = require('../controllers/userController');

router.get('/', getUserData)
router.post('/', createUserData)

module.exports = router