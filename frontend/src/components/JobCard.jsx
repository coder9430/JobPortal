import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// This is the card which is  used to display the job post uploaded by recruiters to applicants
const JobCard = ({ id }) => {
  const [jobDetails, setJobDetails] = useState(null);

  // it fetches the data from the id which is send to it through props
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

  // if jobdetails are not available then Loading will be shown in screen
  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://assets-global.website-files.com/62c41df069f3e62476a3ccbe/6405cab04ccde77baf3c7890_User-Personas-in-Product-Management-p-2000.png"
          className="card-img-top"
          alt="Job"
        />
        <div className="card-body">
          <h5 className="card-title">Job Title: {jobDetails.jobTitle}</h5>
          <p className="card-text">{jobDetails.jobDescription}</p>
          <h6>Location: {jobDetails.location}</h6>
          <Link
            to={`/jobdetails/${jobDetails._id}`}
            className="btn btn-primary"
            style={{
              background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
              color: "white",
              textDecoration: "none", // Optional: to remove underline
            }}
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
