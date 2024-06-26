import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

// This is the list of job post uploaded by different recruiters which will be shown to the applicants.

const JobList = () => {
  const [jobPosts, setJobPosts] = useState([]);

  // this function is used to apply for a particular job
  //sending the particular jobid in body
  const handleApply = async (jobId) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/recruiter/apply",
        {
          jobId: jobId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you store the token in localStorage
          },
        }
      );
      console.log(response.data);

      alert("Applied for Job Successfully!");
    } catch (error) {
      console.error("Error applying for job:", error);
      // Handle errors here
    }
  };

  // fetches all the job post created by rerecruiters
  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/recruiter/jobposts",
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
            <div
              className="btn btn-primary mt-3 ms-2"
              style={{
                background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
                color: "white",
                textDecoration: "none",
              }}
              onClick={() => {
                handleApply(job._id);
              }}
            >
              Apply
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
