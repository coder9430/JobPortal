import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className='container'>
      <h3 style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", border: 'solid 1px black', borderRadius: '5px', padding: '10px', color: 'white'}} >Login</h3>
     
      <form style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/view-desk-items-frame-with-copy-space_23-2148604850.jpg?w=1380&t=st=1717945506~exp=1717946106~hmac=bffc7732fe0e9eb9f1e974a33b4537d510451eaf023b159ef9a763b0f9703c0e)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        padding: '20px', 
        borderRadius: '10px'
      }} onSubmit={e => onSubmit(e)}>
        
  <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="email" value={email} onChange={e => onChange(e)} required />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 col-xl-8 col-sm-8 col-md-8">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  name="password" value={password} onChange={e => onChange(e)} required/>
  </div>
  
  <button type="submit" class="btn btn-primary"style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", color: 'white'}}>Submit</button>
</form>
        
      
    </div>
  );
};

export default Login;
