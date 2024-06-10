const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Recruiter = require("../models/Recruiter"); // Adjust this import based on your project structure
const JobPost = require("../models/JobPost");
const ApplicantDetails = require("../models/ApplicantDetails");
const Application = require("../models/Application");
exports.createRecruiter = async (req, res) => {
  const { username, companyName, email, password, aboutCompany } = req.body;

  try {
    let user = await Recruiter.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new Recruiter({
      username,
      companyName,
      email,
      password,
      aboutCompany,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        username: user.username,
      },
    };

    jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.createJobPost = async (req, res) => {
  const {
    jobTitle,
    salary,
    jobDescription,
    eligibilityCriteria,
    location,
    skills,
  } = req.body;
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "secret");

    const { companyName, aboutCompany, username } = decoded.user; // Extract information from token

    // Check if the username is present in the Recruiter collection
    const recruiter = await Recruiter.findOne({ username });
    if (!recruiter) {
      return res
        .status(401)
        .json({ message: "Unauthorized. Recruiter not found." });
    }

    const newJobPost = new JobPost({
      jobTitle,
      salary,
      jobDescription,
      eligibilityCriteria,
      location,
      skills,
      companyName,
      aboutCompany,
      username,
    });

    await newJobPost.save();
    res.status(201).json({ message: "Job post created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllJobPosts = async (req, res) => {
  console.log("Dfg");
  try {
    const jobPosts = await JobPost.find();
    res.json(jobPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAllJobPostsRecruiters = async (req, res) => {
  console.log("hello bikash");
  try {
    // Extract the token from the request headers
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    // Verify the token and decode it to get the username
    const decoded = jwt.verify(token, "secret");
    const { username } = decoded.user;

    // Find job posts by the username
    console.log(username);
    const jobPosts = await JobPost.find({ username });

    // Return the job posts
    res.json(jobPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobPostById = async (req, res) => {
  try {
    const jobPost = await JobPost.findById(req.params.id);
    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.json(jobPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteJobPost = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, "secret");
    const { username } = decoded.user;

    const recruiter = await Recruiter.findOne({ username });
    if (!recruiter) {
      return res
        .status(401)
        .json({ message: "Unauthorized. Recruiter not found." });
    }

    const jobId = req.params.id;

    const job = await JobPost.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job post not found" });
    }

    await JobPost.findByIdAndDelete(jobId);

    res.status(200).json({ message: "Job post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateJobPostById = async (req, res) => {
  try {
    const {
      jobTitle,
      salary,
      jobDescription,
      eligibilityCriteria,
      location,
      skills,
    } = req.body;
    const updatedJobPost = await JobPost.findByIdAndUpdate(
      req.params.id,
      {
        jobTitle,
        salary,
        jobDescription,
        eligibilityCriteria,
        location,
        skills,
      },
      { new: true }
    );
    if (!updatedJobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    res.status(200).json(updatedJobPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.applyjob = async (req, res) => {
  console.log("apply");
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const { username } = decoded.user;

    // Fetch applicant details using the username
    const applicant = await ApplicantDetails.findOne({ username });
    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }

    // Extract application data from request body
    const { jobId } = req.body;

    // Create a new application document
    const application = new Application({
      applicantId: applicant._id, // Use applicant's ID as the user ID
      jobId,
      applicant: {
        name: applicant.name,
        email: applicant.email,
        // Include other applicant details
        contactDetails: applicant.contactDetails,
        address: applicant.address,
        collegeName: applicant.collegeName,
        degree: applicant.degree,
        branch: applicant.branch,
        passOutYear: applicant.passOutYear,
        tenthPercentage: applicant.tenthPercentage,
        twelfthPercentage: applicant.twelfthPercentage,
        collegeCgpa: applicant.collegeCgpa,
        skills: applicant.skills,
      },
      // Include other application data as needed
    });

    // Save the application to the database
    await application.save();

    // Respond with success message
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getApplications = async (req, res) => {
  const { jobId } = req.params;

  try {
    // Fetch applications for the specified job ID from the database
    const applications = await Application.find({ jobId });

    res.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
