// controllers/applicantController.js
const ApplicantDetails = require('../models/ApplicantDetails');

exports.createApplicant = (req, res) => {
  const {
    name, contactDetails, address, collegeName, degree, branch,
    passOutYear, tenthPercentage, twelfthPercentage, collegeCgpa, email, skills
  } = req.body;

  const newApplicant = new ApplicantDetails({
    name, contactDetails, address, collegeName, degree, branch,
    passOutYear, tenthPercentage, twelfthPercentage, collegeCgpa, email, skills
  });

  newApplicant.save()
    .then(() => res.status(201).json({ message: 'Applicant data saved successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
};
