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
    <div>
      <h1>Login</h1>
      <form onSubmit={e => onSubmit(e)}>
        <input type="email" name="email" value={email} onChange={e => onChange(e)} required />
        <input type="password" name="password" value={password} onChange={e => onChange(e)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
