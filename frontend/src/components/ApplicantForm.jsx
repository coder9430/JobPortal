import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// This is used to get the credentials from Applicant for first time
const ApplicantForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "", 
  });

  const { username, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/applicant/register",
        formData
      );
      console.log("Applicant Data saved Successfully!");
      // we are storing the token in localStorage for further use 
      // Everytime we access an api we send the token in header of request
      localStorage.setItem("token", res.data.token);
      navigate("/register/applicantdetails");
    } catch (err) {
      if (
        //if the status is 400 and msg is "User already exists then alert the user to go to login page and use the previous credentials to login, no need to signup again"
        err.response.status === 400 &&
        err.response.data.msg === "User already exists"
      ) {
        alert("User already exists, please login.");
      } else {
        console.error(err.response.data);
      }
    }
  };

  return (
    <div>
      <h1>Register as Applicant</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ApplicantForm;
