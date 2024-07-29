import React from 'react'
import { FaStar } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const FiveCentuary = () => {
    const arrayCount=Array.from({length:10})
    console.log(arrayCount)
  return (
    <div className='FiveCentuary '>



       <div className="container">
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {arrayCount.map(()=>{
            return <SwiperSlide className='fiveCentureSlider ' >
        <div className='row  '>
            <div className='col-4 '>
                   <div className='Img-start d-flex  justify-content-md-center '>
                   <div>
                        <img className='FiveCentuar-imgae-colon d-none d-lg-block'  src="/assetsReact/asset43.png" alt="" />
                    </div>
                    <div>
                    <img  id='FiveCenturar-perosnId' className='FiveCenturar-perosn'  src="/assetsReact/asset44.png" alt="" />
                    <div className='FiveCentray-start d-flex gap-1 mt-2'>
                    <FaStar className='text-warning five-centure-star' />
                    <FaStar className='text-warning five-centure-star' />
                    <FaStar className='text-warning five-centure-star' />
                    <FaStar className='text-warning five-centure-star' />
                    <FaStar className='text-warning five-centure-star' />

                    </div>
                    </div>
                   </div>
            </div>
            <div className='col-8 position-relative d-flex align-items-md-start  align-items-lg-center'>
                <h5 className='CharliHappne'>
                        When an unknown printer took A galley of type and
                        scrambled it to make a type specimen Book. It has
                        survived not only Five centuries.
                      </h5>
            </div>
        </div>
        </SwiperSlide>
       
        })}
       
      </Swiper>

       
       </div>
    </div>
  )
}

export default FiveCentuary
