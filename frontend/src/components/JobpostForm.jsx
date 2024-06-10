import React from 'react'

function JobpostForm() {
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
        <h3 style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", border: 'solid 1px black', borderRadius: '5px', padding: '10px', color: 'white',fontFamily: 'Montserrat, sans-serif'
}} className='col-xl-8 col-md-8 col-sm-8'>
        Job Post
        </h3>
      </div>
        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Role Offered" aria-label="Name" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Salary" aria-label="Contact Details" />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-xl-8 col-md-8 col-sm-8">
            <textarea type="text" className="form-control" placeholder=" Job Description" aria-label="College Name" />
          </div>
          <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Eligibility Criteria" aria-label="Eligibility Criteria" />
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
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <input type="text" className="form-control" placeholder="Location" aria-label="Location" />
          </div>
          
        </div>

        <div className="row m-2">
          <div className="col-xl-4 col-md-4 col-sm-4">
            <button type="submit" className="btn" style={{background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%", color: 'white'}}>Submit</button>
          </div>
        </div>
      </form>
      
    </div>
  )
}

export default JobpostForm
