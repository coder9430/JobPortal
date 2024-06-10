// routes/applicantRoutes.js
const express = require('express');
const router = express.Router();
const {createApplicantDetails,createApplicant} = require('../controllers/applicantController');


router.post('/register/applicantdetails', createApplicantDetails);
router.post('/register', createApplicant);


module.exports = router;
