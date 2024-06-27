const express = require('express')
const router = express.Router()

// Importing the controller
const { register, login, logout} = require('../controllers/authController')

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Logout route

router.post('/logout', logout);

module.exports = router;

// The above code is the basic structure of the routes for the authentication system.