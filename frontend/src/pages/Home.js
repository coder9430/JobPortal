import React from 'react'
import Navbar from '../components/Navbar';
import ApplicantForm from '../components/ApplicantForm';
import Login from '../components/Login';
import CompanyForm from '../components/CompanyForm';
import JobpostForm from '../components/JobpostForm';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <ApplicantForm></ApplicantForm>
        <br />
        <br />
        <Login></Login>
        <br />
        <br />
        <CompanyForm></CompanyForm>
        <br />
        <br />
        <JobpostForm></JobpostForm>

      </div>
    </div>
  )
}

export default Home;
