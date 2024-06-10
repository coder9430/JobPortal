const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ApplicantDetails",
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  applicant: {
    name: String,
    email: String,
    contactDetails: String,
    address: String,
    collegeName: String,
    degree: String,
    branch: String,
    passOutYear: Number,
    tenthPercentage: Number,
    twelfthPercentage: Number,
    collegeCgpa: Number,
    skills: [String],
  },
  // Include other application data as needed
});

const Application = mongoose.model("Application", applicationSchema);

module.exports =  Application ;
