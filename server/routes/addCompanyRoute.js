const express = require('express');
const router = express.Router()
//importing controllers
const{addCompanyName, getCompanyName, deleteCompanyName} = require('../controllers/addCompanyController');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Add company name
router.post('/add', verifyAdmin, addCompanyName)

//View all company names
router.get('/', getCompanyName)

//Delete company name
router.delete('/delete/:id', verifyAdmin , deleteCompanyName)

module.exports = router;
