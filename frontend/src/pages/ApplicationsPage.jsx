import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ApplicationsPage.css";  // Import custom CSS file

//This page is a part of Recruiter Dashboard where he can see all the applications came for a particular jobid
const ApplicationsPage = () => {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/recruiter/applications/job/${jobId}`
        );
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, [jobId]);
  //showing in table
  return (
    <div className="container mt-4">
      <h2 className="text-center my-4">Applications for Job ID: {jobId}</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Address</th>
              <th scope="col">College</th>
              <th scope="col">Degree</th>
              <th scope="col">Branch</th>
              <th scope="col">Batch</th>
              <th scope="col">10th Percentage</th>
              <th scope="col">12th Percentage</th>
              <th scope="col">College CGPA</th>
              <th scope="col">Skills</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
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
                <td>{application.applicant.skills.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsPage;
