import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const InstaSwiperIMages=["asset45","asset46","asset47","asset48","asset49","asset45","asset51","asset46","asset47","asset48","asset49",]

const InstaSwiper = () => {
  return (
    <div className='InstaSwiper h-100' id='myTeams'>
      <div className="container">
        <div className="row">
            <div className="col-12 text-center">
               <h2 className='InstagramSwiper-Heading'> @Instagram</h2>
            </div>
        </div>  
        
        <Swiper
        slidesPerView={6}
        spaceBetween={25}
       loop="true"
      
        className="mySwiper mt-5"
      >
        {InstaSwiperIMages.map((elm)=>{
            return(
                <SwiperSlide className='SwiperModify' >

                <div className="instaSwiperCard ">
            <img src={`/assetsReact/${elm}.jpeg`} alt="" />
        </div>

                </SwiperSlide>
            )
        })}
      
      </Swiper>
        
         </div>


       

      
      </div>
   
  )
}

export default InstaSwiper
