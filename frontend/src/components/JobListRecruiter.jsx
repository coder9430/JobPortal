import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import { useNavigate } from "react-router-dom";

const JobListRecruiter = () => {
  const navigate = useNavigate();
  const [jobPosts, setJobPosts] = useState([]);
 const handleViewApplications = (jobId)=>{
  navigate(`/applications/${jobId}`);
 }
  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5000/recruiter/jobpost/${jobId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setJobPosts(jobPosts.filter((jobPost) => jobPost._id !== jobId));
    } catch (error) {
      console.error("Error deleting job post:", error);
    }
  };

  const handleEdit = (jobId) => {
    navigate(`/edit/${jobId}`);
  };

  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/recruiter/jobposts/specific",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you store the token in localStorage
            },
          }
        );
        setJobPosts(response.data);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };

    fetchJobPosts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {jobPosts.map((job) => (
          <div key={job._id} className="col-md-4 mb-3">
            <JobCard
              id={job._id}
              jobTitle={job.jobTitle}
              jobDescription={job.jobDescription}
              location={job.location}
            />
            <div className="d-flex gap-3 mt-3 ">
              <button
                className="btn btn-success"
                style={{
                  
                  color: "white",
                }}
                type="button"
                onClick={() => handleEdit(job._id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                style={{
                  
                  color: "white",
                }}
                type="button"
                onClick={() => handleDelete(job._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary"
                style={{
                  
                  color: "white",
                }}
                type="button"
                onClick={() => handleViewApplications(job._id)}
              >
                View Applications
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListRecruiter;
