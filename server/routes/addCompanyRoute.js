const express = require('express');
const router = express.Router()
//importing controllers
const{addCompanyName, getCompanyName, deleteCompanyName} = require('../controllers/addCompanyController')

// Add company name
router.post('/add',  addCompanyName)

//View all company names
router.get('/', getCompanyName)

//Delete company name
router.delete('/delete/:id', deleteCompanyName)

module.exports = router;
