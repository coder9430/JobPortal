const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Applicant', applicantSchema);
