import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const ExpertGreatThingBanner = ({opnerHandler}) => {
  return (
    <>
          <div className="container  position-relative expertGreatThing-move px-4 px-sm-0 mt-lg-5 mt-lg-0">
        <div className="row expertGreatThing ">
          <div className="col-12 flex-column d-flex justify-content-center align-items-center expertGreatThing-parent">
            <div className="play-btn-expert-greatThing  " onClick={opnerHandler}>
            <FaPlay />

            </div>
            <h3 className="expert-Heading">
              Expect Great things From your SEO Agency
            </h3>
            <div className="d-flex flex-column flex-md-row gap-3 mt-2 mt-lg-0">
              <div className="d-flex align-items-center gap-3 ">
                <IoMdCheckmarkCircle className="text-success  fs-5 " />
                <span className="digitalFiturePara text-white">
                  Data Storage and Analysis
                </span>
              </div>{" "}
              <div className="d-flex align-items-center gap-3 ">
                <IoMdCheckmarkCircle className="text-success  fs-5 " />
                <span className="digitalFiturePara text-white">
                  Data Storage and Analysis
                </span>
              </div>
            </div>

            <a href="#" className="Consulting-btn Consulting-btn-expert d-flex align-items-center position-relative ">
              <span className="LearnMore">Learn More</span>
              <FaArrowRight className="fw-900 Read-More-arrow position-absolute" />

            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default ExpertGreatThingBanner
