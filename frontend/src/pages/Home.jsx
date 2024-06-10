import React from "react";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import RegisterModal from "../components/RegisterModal";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro"

//this is the home page or landing page where users can register or login
const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegsiter = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div className="container">
      <Navbar
        handleShowRegister={handleShowRegister}
        handleShowLogin={handleShowLogin}
      ></Navbar>
      <Intro/>

      <LoginModal showLogin={showLogin} handleCloseLogin={handleCloseLogin} />
      <RegisterModal
        showRegister={showRegister}
        handleCloseRegsiter={handleCloseRegsiter}
      />
    </div>
  );
};

export default Home;
