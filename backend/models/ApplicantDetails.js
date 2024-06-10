// models/applicant.js
const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  contactDetails: String,
  address: String,
  collegeName: String,
  degree: String,
  branch: String,
  passOutYear: String,
  tenthPercentage: String,
  twelfthPercentage: String,
  collegeCgpa: String,
  email: String,
  skills: [String],
});

module.exports = mongoose.model('ApplicantDetails', applicantSchema);
