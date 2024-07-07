const express = require('express')
const router = express.Router()

// Importing the controller
const {login, logout} = require('../controllers/authController');
const verifyUser = require('../middlewares/verifyUser');



// Login route
router.post('/login', login);

// Logout route

router.post('/logout', logout);

router.get('/verify-user', verifyUser, (req,res)=>{
    res.status(200).json({success: true ,message: "Token is valid"});
})

module.exports = router;

// The above code is the basic structure of the routes for the authentication system.