import React from "react";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import RegisterModal from "../components/RegisterModal";
import Navbar from "../components/Navbar";
import ApplicantForm from "../components/ApplicantDetailsForm";
import JobpostForm from "../components/JobpostForm";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegsiter = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div>
      <div>
        <Navbar
          handleShowRegister={handleShowRegister}
          handleShowLogin={handleShowLogin}
        ></Navbar>

        <LoginModal showLogin={showLogin} handleCloseLogin={handleCloseLogin} />
        <RegisterModal
          showRegister={showRegister}
          handleCloseRegsiter={handleCloseRegsiter}
        />
      </div>
    </div>
  );
};

export default Home;
