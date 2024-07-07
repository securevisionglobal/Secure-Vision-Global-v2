const express = require('express')
const router = express.Router()
const { addCandidate, getCandidates, updateCandidate } = require('../controllers/candidatesController')
const verifyUser = require('../middlewares/verifyUser')
const verifyAdmin = require('../middlewares/verifyAdmin')


router.post('/add-candidate',verifyUser,  addCandidate)
router.get('/get',verifyUser, getCandidates)
router.get('/get-all', verifyAdmin, getCandidates)
router.put('/update/:id', verifyAdmin, updateCandidate)

module.exports = router 