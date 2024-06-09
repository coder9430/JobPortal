import React from 'react';

function ApplicantForm() {
  return (
    <div>
      
      <form style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/view-desk-items-frame-with-copy-space_23-2148604850.jpg?w=1380&t=st=1717945506~exp=1717946106~hmac=bffc7732fe0e9eb9f1e974a33b4537d510451eaf023b159ef9a763b0f9703c0e)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        padding: '20px', 
        borderRadius: '10px'
      }}>
      <div className="row m-2">
        <h3 style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", border: 'solid 1px black', borderRadius: '5px', padding: '10px', color: 'white', fontFamily: 'Roboto, sans-serif'}} className='col-xl-8 col-md-8 col-sm-8'>
          Applicant's Details
        </h3>
      </div>
        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Name" aria-label="Name" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Contact Details" aria-label="Contact Details" />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-8 col-md-8 col-sm-8">
            <textarea className="form-control" placeholder="Address" rows="3" aria-label="Address"></textarea>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="College Name" aria-label="College Name" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Degree" aria-label="Degree" />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Branch" aria-label="Branch" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Pass Out Year" aria-label="Pass Out Year" />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="10th Percentage" aria-label="10th Percentage" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="12th Percentage" aria-label="12th Percentage" />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="College CGPA" aria-label="College CGPA" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="file" className="form-control" aria-label="Upload Resume" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <select className="form-control" aria-label="Select Skills" defaultValue="">
              <option value="" disabled>Select Skills</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
            </select>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <button type="submit" className="btn" style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", color: 'white'}}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ApplicantForm;
