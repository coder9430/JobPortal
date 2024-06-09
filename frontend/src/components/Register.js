import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'candidate'
  });

  const { username, email, password, role } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={e => onSubmit(e)}>
        <input type="text" name="username" value={username} onChange={e => onChange(e)} required />
        <input type="email" name="email" value={email} onChange={e => onChange(e)} required />
        <input type="password" name="password" value={password} onChange={e => onChange(e)} required />
        <select name="role" value={role} onChange={e => onChange(e)}>
          <option value="candidate">Candidate</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
