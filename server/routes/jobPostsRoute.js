const express = require('express');
const router = express.Router()
//importing controller
const {
    addJobPost,
    getJobPosts,
    deleteJobPost
} = require('../controllers/jobPosts-controller');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Add job post
router.post('/add-jobpost',verifyAdmin, addJobPost)

//View all jobs
router.get('/job-posts',verifyAdmin, getJobPosts)

//Delete job post
router.delete('/delete-jobpost/:id',verifyAdmin, deleteJobPost)

module.exports = router