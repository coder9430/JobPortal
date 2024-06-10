import React from "react";
import { useNavigate } from "react-router-dom";
import JobList from "./JobListRecruiter";

const DashboardRecruiter = () => {
  const navigate = useNavigate();
  const handleJobPost = () => {
    navigate("/jobpost");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button
        className="btn "
        style={{
          background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
          color: "white",
        }}
        type="button"
        onClick={handleJobPost}
      >
        Create a Job
      </button>
      <hr/>
      <JobList/>
    </div>
  );
};

export default DashboardRecruiter;
