import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";




const MyFooter = () => {
  return (
    <div className='MyFooter'>
        <div className="container">
            <div className="row ">
                <div className=" col-12 col-md-6 col-lg-5 lets-Connect-Footer mb-5">
                    <h2 className='Footer-Heading'>Let's Connect.</h2>
                    <p className='footer-para'>Being a coder is both challenging and rewarding. It often involves long hours in front of a screen and debugging code. Each day brings new puzzles to solve, pushing the boundaries of what’s possible.</p>
                    <div className='d-flex gap-3'>
                    <FaYoutube className='footer-icons' />
                    <FaTwitter className='footer-icons'   />
                    <FaGooglePlus className='footer-icons'  />
                    <FaFacebook  className='footer-icons' />



                    </div>
                </div>
                <div className=" col-12  col-lg-7">
                    <div className="row justify-content-center justify-content--md-between gap-3 ">
                        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column gap-3">
                            <h2>Services</h2>
                            <span>Instructions</span>
                            <span>Style guide</span>
                            <span>Licenece</span>
                            <span>404 Not Found</span>
                            <span>Licenece</span>
                            <span>Password protected</span>
                        </div>
                        <div className="col-12 col-md-5  col-lg-3 d-flex flex-column gap-3">
                        <h2>Links</h2>
                            <span>Support</span>
                            <span>Privacy police</span>
                            <span>Terms & Conditions</span>
                            <span>404 Not Found</span>
                            <span>Strategic Finance</span>
                            <span>Video guide</span>
                        </div>
                        <div className="col-12 d-flex gap-4 flex-column col-md-7 col-lg-5  ">
                            <h2 className='d-none d-lg-block'>Subscribe</h2>
                            <div className='mail-box-footer d-flex flex-column gap-4 '>
                                    <input className='Emailfooter' type="email" placeholder='Enter Address' />
                                    <a href="#" className= 'all-btn-hover text-capitalize fw-bold text-decoration-none header_btn d-inline-block text-center'><span>Subscribe</span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <h2 className='text-center copyRight'>© copyright 2024  <span style={{color:"#2CC191"}}>by</span> shubham.code.19@gmail.com</h2>
        </div>
    </div>
  )
}

export default MyFooter
