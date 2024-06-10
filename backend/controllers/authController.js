const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Applicant = require('../models/Applicant');
const Recruiter = require('../models/Recruiter')

// Applicant Auth controller
exports.loginApplicant = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await Applicant.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

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


//Recruiter Login Controller
exports.loginRecruiter = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      let user = await Recruiter.findOne({ username });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const payload = {
        user: {
          id: user.id,
          username: user.username,
          aboutCompany: user.aboutCompany,
          companyName: user.companyName
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



