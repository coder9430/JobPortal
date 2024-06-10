const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const applicantRoutes = require('./routes/applicantRoutes');
const recruiterRoutes = require("./routes/recruiterRoutes")

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://bikashempire321:3ySUuELCUVkxhDim@cluster0.eqhrpla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth/login', authRoutes);

app.use('/applicant', applicantRoutes);
app.use('/recruiter', recruiterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
