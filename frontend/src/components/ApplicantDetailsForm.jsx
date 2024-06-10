import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// This component is used to get information about the applicant like its education background,contact details

const ApplicantDetailsForm = () => {
  //used to navigate to other urls
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contactDetails: "",
    address: "",
    collegeName: "",
    degree: "",
    branch: "",
    passOutYear: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    collegeCgpa: "",
    email: "",
    skills: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // used to clear the formData
  const makeEmpty = () => {
    setFormData({
      name: "",
      contactDetails: "",
      address: "",
      collegeName: "",
      degree: "",
      branch: "",
      passOutYear: "",
      tenthPercentage: "",
      twelfthPercentage: "",
      collegeCgpa: "",
      email: "",
      skills: [],
    });
  };

  const handleSkillChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // sending the formData to the server for storing in database , a token has been send in headers for authorisation purpose
    // by sending token no need to send credemtials for authentication everytime
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/applicant/register/applicantdetails",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      console.log("Applicant Details saved Successfully!");
      makeEmpty();
      console.log("Form submitted successfully:", response.data);
      navigate("/jobboard");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
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
              fontFamily: "Roboto, sans-serif",
            }}
            className="col-xl-8 col-md-8 col-sm-8"
          >
            Applicant's Details
          </h3>
        </div>
        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Contact Details"
              aria-label="Contact Details"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-8 col-md-8 col-sm-8">
            <textarea
              className="form-control"
              placeholder="Address"
              rows="3"
              aria-label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="College Name"
              aria-label="College Name"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Degree"
              aria-label="Degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Branch"
              aria-label="Branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Pass Out Year"
              aria-label="Pass Out Year"
              name="passOutYear"
              value={formData.passOutYear}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="10th Percentage"
              aria-label="10th Percentage"
              name="tenthPercentage"
              value={formData.tenthPercentage}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="12th Percentage"
              aria-label="12th Percentage"
              name="twelfthPercentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="College CGPA"
              aria-label="College CGPA"
              name="collegeCgpa"
              value={formData.collegeCgpa}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              name="email"
              value={formData.email}
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

export default ApplicantDetailsForm;
