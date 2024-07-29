import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";


const HeaderCard = () => {
  

  const [radiobut,setradiobut]=useState(0)
  return (
    <div className="py-4 px-3 py-lg-5 px=lg-5 rounded-5 cardHeader bg-white headarCard ">
      <div className="   ">
            <h2 className="request-quote fw-bold">Request Quote</h2>
        <p className=" marketing">Marketing Business Campaign</p>
        <div className="inputss   d-flex justify-content-center   flex-column gap-3 border-bottom border-danger py-2 pb-5 " >
          <div className="position-relative w-100  d-flex align-items-center  indivialInputs">
            <input
              className=" inputsHeader"
              type="text"
              placeholder="Complete Name"
            />
            <div className="position-absolute input_icons d-none lg:block">
              <FaUser  />
            </div>
          </div>
          <div className="position-relative w-100 d-flex align-items-center indivialInputs">
            <input
              className=" inputsHeader"
              type="text"
              placeholder="Complete Name"
            />
            <div className="position-absolute input_icons d-none lg:block ">
              <SiGooglemessages  />
            </div>
          </div>
          <div className="position-relative w-100 d-flex align-items-center indivialInputs ">
            <input
              className=" inputsHeader"
              type="text"
              placeholder="Complete Name"
            />
            <div className="position-absolute input_icons d-none lg:block">
              
              <IoCall />
            </div>
          </div>
        </div>
        <h3 className="Preferred fw-bold my-3"> Preferred Consult Method:</h3>
        <div className="meetupCalls d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-2 lg-gap-5" style={{width:"80%"}}>
        <div className="videoCaall d-flex align-items-center  gap-4">
        
       <div className="green-input mb-0  " onClick={()=>setradiobut(1)}>
       {radiobut==1&& <FaCheckCircle className="input-btn-check" />}

       </div>
        <h6 className="text-capitalize inradiotext">meetup online</h6>
          </div>
          <div className="videoCaall d-flex align-items-center  gap-4 mb-0">
          <div className="green-input" onClick={()=>setradiobut(2)}>
          {radiobut==2&& <FaCheckCircle className="input-btn-check" />}
          </div>

            <h6 className="text-capitalize inradiotext">video Call</h6>
          </div>
        </div>

        <a href="#" className='all-btn-hover text-capitalize   fw-bold text-decoration-none header_btn d-inline-block mt-5 '><span>Submit Request</span></a>
      </div>
    </div>
  );
};

export default HeaderCard;
