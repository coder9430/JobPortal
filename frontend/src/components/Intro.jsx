import React from "react";
import "./Intro.css";

export default function Intro() {
  
  return (
    <div className="container intro mt-5">
      <div className="row">
        <div className="col-12 col-md-7">
          <h4 className="display-6">
            Find Your Dream Job, Embrace New Adventures, Live Fully!
          </h4>
          <p className="mt-3">
            Navigate Your Career with Confidence. Embark on a rewarding journey
            with CareerPath, your premier destination for seamless job
            opportunities. Whether you're advancing your career, finding your
            passion, or discovering new professional horizons, CareerPath
            ensures every step of your career adventure is smooth and
            successful. Explore new opportunities and create a fulfilling
            professional life with CareerPath as your trusted career companion.
          </p>

        </div>
        <div className="col-12 col-md-5">
          <img
            src="https://img.freepik.com/free-vector/tiny-hr-manager-looking-candidate-job-interview-magnifier-computer-screen-flat-vector-illustration-career-employment_74855-8619.jpg"
            className="img-fluid"
            alt="Not found"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
