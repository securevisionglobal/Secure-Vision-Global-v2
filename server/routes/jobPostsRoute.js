const express = require('express');
const router = express.Router()
//importing controller
const {
    addJobPost,
    getJobPosts,
    deleteJobPost
} = require('../controllers/jobPosts-controller')

// Add job post
router.post('/add-jobpost', addJobPost)

//View all jobs
router.get('/job-posts', getJobPosts)

//Delete job post
router.delete('/delete-jobpost/:id', deleteJobPost)

module.exports = router