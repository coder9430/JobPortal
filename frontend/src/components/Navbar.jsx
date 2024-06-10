import React from "react";

function Navbar({ handleShowRegister, handleShowLogin }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex gap-2">
          <a className="navbar-brand me-0" href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3688/3688609.png"
              alt="Logo"
              width="50"
              height="40"
              className="d-inline-block align-text-top m-2"
            />
          </a>
          <h3 className="mb-0 mt-3">Job-Portal</h3>
          </div>
          
          <div className="d-flex ml-auto ">
            <button
              className="btn me-2"
              style={{
                background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
                color: "white",
              }}
              type="button"
              onClick={handleShowRegister}
            >
              Register
            </button>
            <button
              className="btn "
              style={{
                background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%",
                color: "white",
              }}
              type="button"
              onClick={handleShowLogin}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
