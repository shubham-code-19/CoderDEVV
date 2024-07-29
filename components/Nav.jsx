import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Nav = () => {
  
  const[count,setCount]=useState(0)
  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setCount(scrollY)
    }
    )
  },[])
  console.log(count)


  return (
    <>
       <nav className={`navbar  navbar-expand-lg   w-100 h-30  ${count>400?"nav-fiexd-transition position-fixed  ":"position-absolute "} z-3`}  >
  <div className="container lg:py-5 " style={{height:"50px"}}>
    <a className="w-25 navbar-brand d-flex align-items-center gap-3 flex-1  " href="#">
    <div className=''>
    <img className='w-100' src="/assetsReact/asset0.png" alt="" />

    </div>
        <h3 className={`img-logo ${count>400?"text-dark":"text-white"}`} >Dev
        <span style={{color:"#2cc392"}}>.</span></h3>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav me-auto px-5 px-lg-0 px-xl-5 mb-2 mb-lg-0   fs-5 border-start border-end  border-primary">
        <li className="nav-item">
          <a href="#myHero" className={`nav-link active ${count>400?"color-nav-black":"color-nav-white"}`} aria-current="page" >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#myDigital" className={`nav-link  ${count>400?"color-nav-black":"color-nav-white"}`} >
            About
          </a>
        </li>
        <li className="nav-item">
        <a href="#myService" className={`nav-link  ${count>400?"color-nav-black":"color-nav-white"}`} >
        Services
          </a>
        </li>
        <li className="nav-item">
        <a href="#myPlans" className={`nav-link  ${count>400?"color-nav-black":"color-nav-white"}`} >
        Plans
          </a>
        </li>
        <li className="nav-item">
        <a href="#myTeams" className={`nav-link  ${count>400?"color-nav-black":"color-nav-white"}`} >
        Teams
          </a>
        </li>
        <li className="nav-item">
        <a href='#myFaq'  className={`nav-link  ${count>400?"color-nav-black":"color-nav-white"}`}>
        FAQs
          </a>
        </li>
       
      </ul>
        <div className='d-none d-md-flex align-items-center gap-2'>
            <div className='border rounded-circle d-none d-md-flexalign-items-center justify-content-center bg-white border-5' style={{ height:"40px",width:"40px"}}>
            <FaPhone />
            </div>
            <div className={`  fw-bolder d-flex flex-column align-content-start  ${count>400?"text-dark":"text-white"} `}>
                <p className='m-0 '>HelpLine</p>
                <p className='m-0 '>+21 (933-9338-43)</p>
            </div>
            
        </div>
    </div>
  </div>
</nav>


    </>
  )
}

export default Nav
