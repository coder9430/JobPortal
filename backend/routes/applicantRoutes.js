// routes/applicantRoutes.js
const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

router.post('/applicants', applicantController.createApplicant);

module.exports = router;
