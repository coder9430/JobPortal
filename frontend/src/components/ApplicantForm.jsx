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
    confirmPassword: "", // Add confirmPassword field
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
      localStorage.setItem("token", res.data.token);
      // we are storing the token in localStorage for further use
      // Everytime we access an api we send the token in header of request
      navigate("/register/applicantdetails");
    } catch (err) {
      //if the status is 400 and msg is "User already exists then alert the user to go to login page and use the previous credentials to login, no need to signup again"
      if (
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
      <h3
        style={{
          background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
          border: "solid 1px black",
          borderRadius: "5px",
          padding: "10px",
          color: "white",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Register as Applicant
      </h3>

      <form
        onSubmit={onSubmit}
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
        <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="username" class="form-label">
            Username
          </label>
          <input
            type="username"
            class="form-control"
            id="username"
            a
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            a
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="confirmPassword" class="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            class="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </div>
        <button
        className="btn"
          type="submit"
          style={{
            background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
            color: "white",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default ApplicantForm;
