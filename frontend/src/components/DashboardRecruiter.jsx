import React from "react";
import { useNavigate } from "react-router-dom";
import JobList from "./JobListRecruiter";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardRecruiter.css'; // Import the custom CSS file

// This is the dashboard of Recruiter where he/she can create a job post, edit it, delete it and also see the applications for each job.
const DashboardRecruiter = () => {
  const navigate = useNavigate();
  const handleJobPost = () => {
    navigate("/jobpost");
  };

  return (
    <div className="dashboard-container container mt-4">
      <div className="dashboard-header text-center mb-4">
        <h1>Recruiter Dashboard</h1>
        <p>Welcome to the dashboard! Manage your job posts and applications here.</p>
      </div>
      <div className="text-center mb-4">
        <button
          className="btn create-job-btn"
          type="button"
          onClick={handleJobPost}
        >
          Create a Job
        </button>
      </div>
      <hr />
      <JobList />
    </div>
  );
};

export default DashboardRecruiter;
