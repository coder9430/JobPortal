import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginApplicant = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login/applicant', formData);
      console.log("Logged in successfully!");
      localStorage.setItem("token",res.data.token);
      navigate("/jobboard")
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.msg)
    }
  };

  return (
    <div className='container'>
      <h3 style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", border: 'solid 1px black', borderRadius: '5px', padding: '10px', color: 'white'}} >Login as Applicant</h3>
     
      <form style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/view-desk-items-frame-with-copy-space_23-2148604850.jpg?w=1380&t=st=1717945506~exp=1717946106~hmac=bffc7732fe0e9eb9f1e974a33b4537d510451eaf023b159ef9a763b0f9703c0e)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        padding: '20px', 
        borderRadius: '10px'
      }} onSubmit={e => onSubmit(e)}>
        
  <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
    <label for="username" class="form-label">Username</label>
    <input type="username" class="form-control" id="username" a  name="username" value={username} onChange={e => onChange(e)} required />
  </div>
  <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"  name="password" value={password} onChange={e => onChange(e)} required/>
  </div>
  
  <button type="submit" class="btn btn-primary"style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", color: 'white'}}>Submit</button>
</form>
        
      
    </div>
  );
};

export default LoginApplicant;
