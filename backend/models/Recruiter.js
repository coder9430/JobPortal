const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  companyName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  aboutCompany: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
