import React from 'react'
import LoginModal from '../components/LoginModal';
import { useState } from 'react';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  
  return (
    <div>
      <div>
        Hello Welcome to Our job Portal
        <div className='btn btn-primary' onClick={handleShowLogin}>
          Login
        </div>
        <LoginModal show={showLogin} handleClose={handleCloseLogin} />
      </div>
    </div>
  )
}

export default Home;
