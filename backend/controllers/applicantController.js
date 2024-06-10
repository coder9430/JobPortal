// controllers/applicantController.js
const ApplicantDetails = require('../models/ApplicantDetails');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Applicant = require('../models/Applicant');

exports.createApplicantDetails = (req, res) => {
  // Extract token from headers
  const token = req.header('Authorization').split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, 'secret'); // Use your JWT secret

    // Fetch the username from the token
    const username = decoded.user.username; // Adjust according to your token payload structure

    // Extract other details from the request body
    const {
      name, contactDetails, address, collegeName, degree, branch,
      passOutYear, tenthPercentage, twelfthPercentage, collegeCgpa, email, skills
    } = req.body;

    // Create a new applicant with the username and other details
    const newApplicant = new ApplicantDetails({
      username, // Save the username in the database
      name, contactDetails, address, collegeName, degree, branch,
      passOutYear, tenthPercentage, twelfthPercentage, collegeCgpa, email, skills
    });

    // Save the new applicant to the database
    newApplicant.save()
      .then(() => res.status(201).json({ message: 'Applicant data saved successfully' }))
      .catch(err => res.status(400).json({ error: err.message }));
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};



exports.createApplicant = async (req, res) => {
  const { username, email, password} = req.body;

  try {
    let user = await Applicant.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new Applicant({
      username,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        username:user.username
      }
    };

    jwt.sign(payload, 'secret', { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};