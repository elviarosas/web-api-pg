const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/users.js')

router.use('/', UserControllers.getAllUsers)

module.exports = router;