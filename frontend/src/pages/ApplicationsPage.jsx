import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ApplicationsPage=()=> {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recruiter/applications/job/${jobId}`);
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, [jobId]);

  return (
    <div>
  <h1>Applications for Job ID: {jobId}</h1>
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile No</th>
        <th scope="col">Address</th>
        <th scope="col">College</th>
        <th scope="col">Degree</th>
        <th scope="col">Branch</th>
        <th scope="col">Pass Out Year</th>
        <th scope="col">10th Percentage</th>
        <th scope="col">12th Percentage</th>
        <th scope="col">College CGPA</th>
        <th scope="col">Skills</th>
      </tr>
    </thead>
    <tbody>
      {applications.map(application => (
        <tr key={application._id}>
          <td>{application.applicant.name}</td>
          <td>{application.applicant.email}</td>
          <td>{application.applicant.contactDetails}</td>
          <td>{application.applicant.address}</td>
          <td>{application.applicant.collegeName}</td>
          <td>{application.applicant.degree}</td>
          <td>{application.applicant.branch}</td>
          <td>{application.applicant.passOutYear}</td>
          <td>{application.applicant.tenthPercentage}</td>
          <td>{application.applicant.twelfthPercentage}</td>
          <td>{application.applicant.collegeCgpa}</td>
          <td>{application.applicant.skills.join(', ')}</td>
          {/* Include other applicant details as needed */}
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default  ApplicationsPage;
