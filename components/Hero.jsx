import React from 'react'
import HeaderCard from './HeaderCard'
import Nav from './Nav'

const Hero = () => {
  return (
    <>
      <div className="w-100 h-100 position-relative  hero " id="myHero" >
      <div className='container'>
      <div className="row justify-content-between">
            <div className="col-md-6 text-white order-3 order-lg-1 ">
                <h2 className='heroHeading '>Awesome Website To Promote Your Services</h2>
                <p className='py-4 hero-para'>Every pleasure is to be welcomed and every pain atvoided. But in certain circumstances and owing to the claims of duty obligations of business it will frequently occur that.</p>
                <div className='d-flex hero-logo-parent'>
                    <img className='hero-logos' src="/assetsReact/asset1.png" alt="" />
                    <img className='hero-logos' src="/assetsReact/asset2.png" alt="" />
                    <img className='hero-logos' src="/assetsReact/asset3.png" alt="" />
                    <img className='hero-logos' src="/assetsReact/asset4.png" alt="" />
                </div>
                <a href="#" className='all-btn-hover text-capitalize fw-bold text-decoration-none header_btn d-inline-block mt-5 '><span>get quote now</span></a>
            </div>
            <div className="col-md-6    position-relative order-2 order-lg-2 ">
              {/* <div className='header1-img d-none d-lg-block' >
                <img src="/assetsReact/header1.png" alt="../asets" />
              </div> */}
              {/* <div className='header2-img d-none d-lg-block'>
                <img src="/assetsReact/header2.png" alt="../asets" />
              </div> */}
              
                <HeaderCard/>
               
              {/* <div className='header3-img d-none d-lg-block'>
                <img src="/assetsReact/header3.png" alt="../asets" />
              </div> */}

            </div>

        </div>
      </div>
        
       
          <div className='bgCove'>

          </div>
      </div>
      
    </>
  )
}

export default Hero
