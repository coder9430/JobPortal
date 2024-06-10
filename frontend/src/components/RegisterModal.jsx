import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//This is the modal for register button
const RegisterModal = ({ showRegister, handleCloseRegsiter }) => {
  const navigate = useNavigate();

  const handleOption1 = () => {
    navigate("/register/applicant");
    handleCloseRegsiter();
  };

  const handleOption2 = () => {
    navigate("/register/recruiter");
    handleCloseRegsiter();
  };

  return (
    <Modal show={showRegister} onHide={handleCloseRegsiter}>
      <Modal.Header closeButton>
        <Modal.Title>Regsiter as</Modal.Title>
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

export default RegisterModal;
