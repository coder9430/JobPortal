const express = require('express');
const { loginRecruiter, loginApplicant } = require('../controllers/authController');

const router = express.Router();

// Applicant route
router.post('/applicant', loginApplicant);
router.post('/recruiter', loginRecruiter);

module.exports = router;

