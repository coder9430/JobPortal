import React, { useState } from "react";
import axios from "axios";

// This form is used to create a job post
const JobpostForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    salary: "",
    jobDescription: "",
    eligibilityCriteria: "",
    location: "",
    skills: [],
  });

  const {
    jobTitle,
    salary,
    jobDescription,
    eligibilityCriteria,
    location,
    skills,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        skills: [...skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:5000/recruiter/jobpost",
        formData,
        config
      );
      console.log("Form submitted successfully:", response.data);
      alert("Job created Successfully!");
      setFormData({
        jobTitle: "",
        salary: "",
        jobDescription: "",
        eligibilityCriteria: "",
        location: "",
        skills: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mt-4">
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/view-desk-items-frame-with-copy-space_23-2148604850.jpg?w=1380&t=st=1717945506~exp=1717946106~hmac=bffc7732fe0e9eb9f1e974a33b4537d510451eaf023b159ef9a763b0f9703c0e)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="row m-2">
          <h3
            style={{
              background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
              border: "solid 1px black",
              borderRadius: "5px",
              padding: "10px",
              color: "white",
              fontFamily: "Montserrat, sans-serif",
            }}
            className="col-xl-8 col-md-8 col-sm-8"
          >
            Job Post
          </h3>
        </div>
        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Job Title"
              aria-label="Job Title"
              name="jobTitle"
              value={jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Salary"
              aria-label="Salary"
              name="salary"
              value={salary}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-xl-8 col-md-8 col-sm-8">
            <textarea
              type="text"
              className="form-control"
              placeholder="Job Description"
              aria-label="Job Description"
              name="jobDescription"
              value={jobDescription}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Eligibility Criteria"
              aria-label="Eligibility Criteria"
              name="eligibilityCriteria"
              value={eligibilityCriteria}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              aria-label="Location"
              name="location"
              value={location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-12">
            <label>Select Skills</label>
            <div className="form-group d-flex gap-3 mt-2">
              <div>
                <input
                  type="checkbox"
                  value="JavaScript"
                  onChange={handleSkillChange}
                />{" "}
                JavaScript
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Python"
                  onChange={handleSkillChange}
                />{" "}
                Python
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Java"
                  onChange={handleSkillChange}
                />{" "}
                Java
              </div>
              <div>
                <input type="checkbox" value="C" onChange={handleSkillChange} />{" "}
                C
              </div>
              <div>
                <input
                  type="checkbox"
                  value="C++"
                  onChange={handleSkillChange}
                />{" "}
                C++
              </div>
              <div>
                <input
                  type="checkbox"
                  value="React"
                  onChange={handleSkillChange}
                />{" "}
                React
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Node.js"
                  onChange={handleSkillChange}
                />{" "}
                Node.js
              </div>
              <div>
                <input
                  type="checkbox"
                  value="MongoDb"
                  onChange={handleSkillChange}
                />{" "}
                MongoDb
              </div>
              <div>
                <input
                  type="checkbox"
                  value="SQL"
                  onChange={handleSkillChange}
                />{" "}
                SQL
              </div>
              <div>
                <input
                  type="checkbox"
                  value="CSS"
                  onChange={handleSkillChange}
                />{" "}
                CSS
              </div>
              <div>
                <input
                  type="checkbox"
                  value="HTML"
                  onChange={handleSkillChange}
                />{" "}
                HTML
              </div>
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <button
              type="submit"
              className="btn"
              style={{
                background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
                color: "white",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobpostForm;
