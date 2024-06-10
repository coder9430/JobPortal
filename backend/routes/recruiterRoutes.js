const express = require('express');
const router = express.Router();
const {createRecruiter,createJobPost,getAllJobPosts, getJobPostById,deleteJobPost,updateJobPostById, applyjob, getApplications, getAllJobPostsRecruiters} = require("../controllers/recruiterController")

router.post('/register', createRecruiter);
router.post('/jobpost', createJobPost);
router.get('/jobposts/specific', getAllJobPostsRecruiters);
router.get('/jobposts', getAllJobPosts);
router.get('/jobpost/:id', getJobPostById);
router.delete('/jobpost/:id', deleteJobPost);
router.put('/jobpost/:id', updateJobPostById);
router.post('/apply',applyjob );
router.get('/applications/job/:jobId',getApplications)


module.exports = router;