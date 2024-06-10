import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobDetails.css'; // Import the custom CSS file

// This page gives users the details of each job post like company, about company, skills required, etc.
const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/recruiter/jobpost/${id}`
        );
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow-sm job-details-card">
          <h5 className="card-header job-details-header">Job Details</h5>
          <div className="card-body job-details-body">
            <h3 className="card-title">{jobDetails.companyName}</h3>
            <h4 className="card-subtitle">About us</h4>
            <p className="card-text">{jobDetails.aboutCompany}</p>
            <hr />

            <div className="job-details-section">
              <h5>Role Offered</h5>
              <p>{jobDetails.jobTitle}</p>
            </div>

            <div className="job-details-section">
              <h5>Salary</h5>
              <p>CTC: {jobDetails.salary}</p>
            </div>

            <div className="job-details-section">
              <h5>Job Description</h5>
              <p>{jobDetails.jobDescription}</p>
            </div>

            <div className="job-details-section">
              <h5>Eligibility Criteria</h5>
              <p>{jobDetails.eligibilityCriteria}</p>
            </div>

            <div className="job-details-section">
              <h5>Location</h5>
              <p>{jobDetails.location}</p>
            </div>

            <div className="job-details-section">
              <h5>Skills Required:</h5>
              <ul>
                {jobDetails.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
