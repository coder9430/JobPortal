import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//This page gives users the details of each job post like company,about company,skills required etc.
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
    <div className="container">
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow-sm">
          <h5
            className="card-header"
            style={{
              background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Job Details
          </h5>
          <div
            className="card-body"
            style={{ textAlign: "left", padding: "1.5rem" }}
          >
            <h3 className="card-title d-inline-block">
              {jobDetails.companyName}
            </h3>
            <h4 className="card-title">About us</h4>
            <p className="card-text">{jobDetails.aboutCompany}</p>
            <hr></hr>

            <div className="my-3">
              <h5 style={{ fontWeight: "bold" }}>Role Offered</h5>
              <p>{jobDetails.jobTitle}</p>
            </div>

            <div className="my-3">
              <h5 style={{ fontWeight: "bold" }}>Salary</h5>
              <p>CTC: {jobDetails.salary}</p>
            </div>

            <div className="my-3">
              <h5 style={{ fontWeight: "bold" }}>Job Description</h5>
              <p>{jobDetails.jobDescription}</p>
            </div>

            <div className="my-3">
              <h5 style={{ fontWeight: "bold" }}>Eligibility Criteria</h5>
              <p>{jobDetails.eligibilityCriteria}</p>
            </div>
            <div className="my-3">
              <h5 style={{ fontWeight: "bold" }}>Location</h5>
              <p>{jobDetails.location}</p>
            </div>
            <div className="my-3">
              <h5 style={{ fontWeight: "bold" }}>Skills Required:</h5>
              <ul style={{ marginLeft: "0.5rem" }}>
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
