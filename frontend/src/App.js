import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/RegisterApplicant';
import DashboardRecruiter from './components/DashboardRecruiter';
import Home from "./pages/Home";
import LoginApplicant from './pages/LoginApplicantPage';
import LoginRecruiter from './pages/LoginRecruiterPage';
import RegisterApplicant from './pages/RegisterApplicantDetails';
import RegisterRecruiter from './pages/RegisterRecruiter';
import JobpostForm from './components/JobpostForm';
import JobBoard from './pages/JobBoard';
import EditPage from "./pages/EditPage"
import JobDetails from './pages/JobDetails';
import ApplicationsPage from './pages/ApplicationsPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route  path="/" element={<Home/>} />
          <Route  path="/register/applicantdetails" element={<RegisterApplicant/>} />
          <Route  path="/register/applicant" element={<Register/>} />
          <Route  path="/register/recruiter" element={<RegisterRecruiter/>} />
          <Route  path="/login/applicant" element={<LoginApplicant/>} />
          <Route  path="/login/recruiter" element={<LoginRecruiter/>} />
          <Route  path="/jobpost" element={<JobpostForm/>} />
          <Route path="/dashboard" element={<DashboardRecruiter/>} />
          <Route path="/jobboard" element={<JobBoard/>} />
          <Route path="/edit/:id" element={<EditPage/>} />
          <Route path="/jobdetails/:id" element={<JobDetails/>} />
          <Route path="/applications/:jobId" element={<ApplicationsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
