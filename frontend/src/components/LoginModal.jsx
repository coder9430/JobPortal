import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ showLogin, handleCloseLogin }) => {
  const navigate = useNavigate();
  
  console.log(showLogin, handleCloseLogin);

  const handleOption1 = () => {
    navigate("/login/applicant");
    handleCloseLogin();
  };

  const handleOption2 = () => {
    navigate("/login/recruiter");
    handleCloseLogin();
  };

  return (
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <Modal.Header closeButton>
        <Modal.Title>Login as</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex gap-4 justify-content-center">
          <Button variant="success" onClick={handleOption1}>
            Applicant
          </Button>
          <Button variant="danger" onClick={handleOption2}>
            Recruiter
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
