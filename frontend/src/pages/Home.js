import React from 'react'
import LoginModal from '../components/LoginModal';
import { useState } from 'react';
import RegisterModal from '../components/RegisterModal';
import Navbar from '../components/Navbar';
import ApplicantForm from '../components/ApplicantForm';
import Login from '../components/Login';
import CompanyForm from '../components/CompanyForm';
import JobpostForm from '../components/JobpostForm';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showLRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  
  const handleCloseLRegsiter = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <ApplicantForm></ApplicantForm>
        <br />
        <br />
        <Login></Login>
        <br />
        <br />
        <CompanyForm></CompanyForm>
        <br />
        <br />
        <JobpostForm></JobpostForm>
        <div className='btn btn-primary' onClick={handleShowLogin}>
          Login
        </div>
        <div className='btn btn-primary' onClick={handleShowRegister}>
          Register
        </div>
        <LoginModal showLogin={showLogin} handleCloseLogin={handleCloseLogin} />
        <RegisterModal showLRegister={showLRegister} handleCloseLRegsiter={handleCloseLRegsiter} />
        

      </div>
    </div>
  )
}

export default Home;
