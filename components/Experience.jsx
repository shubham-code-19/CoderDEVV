import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <img
                className=" img-fluid rounded-4"
                src="/assetsReact/expericeSection.jpg"
                alt=""
              />
            </div>
            <div className="d-flex flex-column flex-md-row  experince  ">
              <div className="sub1">
                <div className="d-flex align-items-center gap-3 digitalFiturePara-parent">
                  <IoMdCheckmarkCircle className="text-success  fs-5" />
                  <span className="digitalFiturePara experience">
                    Get high conversion rates
                  </span>
                </div>
                <div className="d-flex align-items-center gap-3 digitalFiturePara-parent">
                  <IoMdCheckmarkCircle className="text-success  fs-5" />
                  <span className="digitalFiturePara experience">
                    Virtual Private Server
                  </span>
                </div>
              </div>
              <div className="sub2">
                <div className="d-flex align-items-center gap-3 digitalFiturePara-parent">
                  <IoMdCheckmarkCircle className="text-success  fs-5" />
                  <span className="digitalFiturePara experience">
                    Get high conversion rates
                  </span>
                </div>
                <div className="d-flex align-items-center gap-3 digitalFiturePara-parent">
                  <IoMdCheckmarkCircle className="text-success  fs-5" />
                  <span className="digitalFiturePara experience">
                    Virtual Private Server
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-4 mt-lg-5 ">
              <div className="col-lg-4">
                {/* <a
                  href="#"
                  className="text-capitalize fw-bold text-decoration-none header_btn d-inline-block  learnMore"
                >
                  Learn More
                </a> */}
                <a href="#" className="Consulting-btn  d-flex align-items-center position-relative ">
              <span className="LearnMore">Learn More</span>
              <FaArrowRight className="fw-900 Read-More-arrow position-absolute" />

            </a>
              </div>
              <div className="col-lg-8 d-none d-lg-flex ">
                <div className=" d-flex align-items-center img-contain  position-relative">
                  <img
                    className="setImages"
                    data-val="0%"
                    src="/assetsReact/experice2.jpg"
                    alt=""
                  />
                  <img
                    className="setImages"
                    data-val="20%"
                    src="/assetsReact/experince.jpg"
                    alt=""
                  />
                  <img
                    className="setImages"
                    data-val="30%"
                    src="/assetsReact/experice2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="joined-community">
                    Joined Our Community <br /> <span>150k <sub>+</sub></span> Creators{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="row mt-3 mt-lg-5 ">
              <div className="col-6 col-lg-3 py-2">
                <img
                  className=" img-fluid"
                  src="/assetsReact/expericedLogo1.png"
                  alt=""
                />
              </div>
              <div className="col-6 col-lg-3 py-2">
                <img
                  className=" img-fluid"
                  src="/assetsReact/expericedLogo2.png"
                  alt=""
                />
              </div>
              <div className="col-6 col-lg-3 py-2">
                <img
                  className=" img-fluid"
                  src="/assetsReact/expericedLogo3.png"
                  alt=""
                />
              </div>
              <div className="col-6 col-lg-3 py-2">
                <img
                  className=" img-fluid"
                  src="/assetsReact/expericedLogo4.png"
                  alt=""
                />
              </div>
            </div>
          </div>





          <div className="col-md-6 mt-5 mt-md-0">
            <div className=" top-rated-company2 mb-4 mb-lg-0 ">
              <h6>Top Rated Company </h6>
            </div>
            <h2 className="ConsultingExperience">
              Starting a Consulting Business With No Experience
            </h2>
            <p className="ConsultingExperience-para">
              A custom logo design is a crucial part of your overall branding
              tprocess. Your logo design is a significant. is a crucial part of
              your overall branding part of your overall branding
            </p>
            <div>
              <img className="img-fluid" src="/assetsReact/asset22.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
