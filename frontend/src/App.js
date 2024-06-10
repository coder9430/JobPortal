import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from "./pages/Home";
import LoginApplicant from './pages/LoginApplicant';
import LoginRecruiter from './pages/LoginRecruiter';
import RegisterApplicant from './pages/RegisterApplicant';
import RegisterRecruiter from './pages/RegisterRecruiter';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route  path="/" element={<Home/>} />
          <Route  path="/register/applicant" element={<RegisterApplicant/>} />
          <Route  path="/register/recruiter" element={<RegisterRecruiter/>} />
          <Route  path="/login/applicant" element={<LoginApplicant/>} />
          <Route  path="/login/recruiter" element={<LoginRecruiter/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
