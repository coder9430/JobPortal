import React from 'react';
import JobList from '../components/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobBoard.css'; // Import the custom CSS file

// This is the page to hold the JobList component for Applicants
const JobBoard = () => {
  return (
    <div className='job-board-container container mt-4'>
      <div className='job-board-header text-center mb-4'>
        <h1>Job Opportunities</h1>
        <p>Discover your next career move and explore exciting job opportunities.</p>
      </div>
      <JobList />
    </div>
  );
}

export default JobBoard;
