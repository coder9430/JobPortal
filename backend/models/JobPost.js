const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  eligibilityCriteria: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  companyName: {
    type: String,
  },
  aboutCompany: {
    type: String,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model("JobPost", jobPostSchema);
