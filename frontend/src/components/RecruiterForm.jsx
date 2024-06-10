import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RecruiterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    companyName: '',
    email: '',
    password: '',
    aboutCompany: ''
  });

  const { username, companyName, email, password, aboutCompany } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/recruiter/register", formData);
      console.log("Form submitted successfully:");
      localStorage.setItem('token', res.data.token);
      navigate("/dashboard")
    } catch (err) {
      if (err.response.status === 400 && err.response.data.msg === 'User already exists') {
        alert('User already exists, please login.');
      } else {
        console.error(err.response.data);
      }
    }
  };

  return (
    <div className='container'>
      <h3 style={{
        background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
        border: 'solid 1px black',
        borderRadius: '5px',
        padding: '10px',
        color: 'white',
        fontFamily: 'Lato, sans-serif'
      }}>
        Register as Recruiter
      </h3>

      <form 
        onSubmit={handleSubmit}
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/view-desk-items-frame-with-copy-space_23-2148604850.jpg?w=1380&t=st=1717945506~exp=1717946106~hmac=bffc7732fe0e9eb9f1e974a33b4537d510451eaf023b159ef9a763b0f9703c0e)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '10px'
        }}
      >
        <div className="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

       

        <div className="mb-3 col-xl-8 col-sm-8 col-md-8">
          <label htmlFor="aboutCompany" className="form-label">About Company</label>
          <textarea
            className="form-control"
            id="aboutCompany"
            name="aboutCompany"
            value={aboutCompany}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", color: 'white'}}>Submit</button>
      </form>
    </div>
  );
}

export default RecruiterForm;
