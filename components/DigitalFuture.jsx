import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaArrowUp } from "react-icons/fa";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { FaArrowDown } from "react-icons/fa";


const DigitalFuture = () => {
  return (
    <>
    <div className="container mt-5 py-5" id='myDigital'>
        <div className="row">
            <div className="col-md-6 position-relative mb-5  mb-lg-0 ">
                <div>
                <img className='w-100 img-fluid' src="/assetsReact/block1.png" alt="" />
                </div>

               <div className='d-flex justify-content-lg-end digitailFutureImage-parent '>
               <div className='digitailFutureImage  '>
                    <h6 className='Performance'>Performance</h6>
                    <div className='d-flex   digitalFutureSubBox '>
                    <div className='d-flex flex-column  flex-lg-row performance-child '>
                        <div className='mt-2'>
                        <HiMiniComputerDesktop className='bg-info rounded-circle fs-2 p-1' />    
                        </div>
                        <div>
                            <span className='num'>2584 <sub> +</sub> </span><FaArrowUp className='text-success' />
                            <h6 className='customers'>Customers</h6>
                        </div>
                    </div>
                    <div className='d-flex flex-column flex-lg-row  performance-child '>
                        <div className='mt-2'>
                        <LiaBroadcastTowerSolid className='bg-info rounded-circle fs-2 p-1' />    
                        </div>
                        <div>
                            <span className='num'>150 K </span><FaArrowDown className='text-warning' />
                            <h6 className='customers'>Income</h6>
                        </div>
                    </div>
                    </div>
                    <div className='d-flex gap-5 align-items-center'>
                    <span className='new-buniess'>New business Inovation</span>
                    <span>75%</span>
                    </div>
                    <div className='progressBar-parent'>
                        <div className="progressBarchild"></div>
                    </div>
                </div>
               </div>
            </div>
            
            <div className="col-md-6 pt-5 mt-5 mt-md-0 ">
                <div className='d-flex top-rated-company'>
                <FaStar className='text-warning yellow-star' />
                <h6>Top Rated Company </h6>
                </div>
                <div>
                <h2 className='develop-heading'>We Develop & Create Digital Future</h2>
                <p className='develop-para'>Every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the <span>claims of duty obligations of business</span> it will frequently occur Contact us today.</p>
                </div>
                    <div className="row flex-column flex-lg-row">
                        <div className="col-5">
                            <h2 className='digitalFuture'>4.7 <sub>+</sub></h2>
                            <div className='star-parent'>
                                <FaStar className='text-warning yellow-star' />
                            <FaStar className='text-warning yellow-star' />
                            <FaStar className='text-warning yellow-star' />
                            <FaStar className='text-warning yellow-star' />
                            <FaStar className='text-warning yellow-star' />

                            </div>
                            <p className='review'>Review Customer</p>
                        </div>
                        <div className="col-lg-7 d-flex flex-column gap-4">
                            <div className='d-flex align-items-center gap-3 '>
                            <IoMdCheckmarkCircle className='text-success  fs-5 '/>
                            <span className='digitalFiturePara'> 
                            Data Storage and Analysis</span>
                            </div>
                           
                            <div className='d-flex align-items-center gap-3 '>
                            <IoMdCheckmarkCircle className='text-success  fs-5'/>
                            <span className='digitalFiturePara'> 
                            International Online Support</span>
                            </div>
                           
                            <div className='d-flex align-items-center gap-3 '>
                            <IoMdCheckmarkCircle className='text-success  fs-5'/>
                            <span className='digitalFiturePara'> 
                            Branding Project Development</span>
                            </div>
                           
                          

                        </div>
                    </div>
                    <a href="#" className='all-btn-hover text-capitalize fw-bold text-decoration-none header_btn d-inline-block mt-5 '><span>get quote now</span></a>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default DigitalFuture
