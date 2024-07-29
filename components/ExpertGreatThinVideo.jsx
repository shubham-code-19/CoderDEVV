import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const ExpertGreatThinVideo = ({closeHandler}) => {
  return (
    <>
       <div className="container  position-relative expertGreatThing-move px-4 px-sm-0 mt-5 mt-lg-0">
        <div className="row expertGreatThing ExpertGreatThinVideo ">
        <iframe className='rounded-5' width="460" height="full" src="https://www.youtube.com/embed/6dvgZvotJiQ?si=KmaVIhqxo9ssDy8g&amp;start=12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay></iframe>
        <div className='video-cross ' onClick={closeHandler}>
        <IoCloseSharp className='video-corss-btn' />

        </div>
        </div>
      </div>
    </>
  )
}

export default ExpertGreatThinVideo
