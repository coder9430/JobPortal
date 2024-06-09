import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LoginModal = ({ showLogin, handleCloseLogin }) => {
    console.log(showLogin,handleCloseLogin)
  const handleOption1 = () => {
    alert("Option 1 selected");
    handleCloseLogin();
  };

  const handleOption2 = () => {
    alert("Option 2 selected");
    handleCloseLogin();
  };

  return (
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <Modal.Header closeButton>
        <Modal.Title>Choose an Option</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please choose one of the options below:
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleOption1}>
          Option 1
        </Button>
        <Button variant="danger" onClick={handleOption2}>
          Option 2
        </Button>
        <Button variant="secondary" onClick={handleCloseLogin}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
