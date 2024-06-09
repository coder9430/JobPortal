import React from 'react'
import LoginModal from '../components/LoginModal';
import { useState } from 'react';
import RegisterModal from '../components/RegisterModal';

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
        Hello Welcome to Our job Portal
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
