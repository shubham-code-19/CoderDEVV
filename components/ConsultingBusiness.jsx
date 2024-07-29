import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ConsultingBusiness = () => {
  return (
    <>
      <div className="container consulting-parent">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start align-items-lg-start consulting-gap">
            <div className=" top-rated-company2 top-rated-company2-main">
              <h6>Top Rated Company </h6>
            </div>

            <h2 className="startConsulting mt-3 mt-lg-5">
              Starting a Consulting Business With
            </h2>
            <p className="startConsulting-para">
              A custom logo design is a crucial part of your overall branding
              Process. Your logo design is a sitgnificant. is a crucial part of
              your overall branding part of your overall branding
            </p>

            <div className="">
              <div className="d-flex gap-3   align-items-center">
                <div className="img-consulting-parent">
                  <img
                    src="/assetsReact/consultingLogo1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="consultingLogoPara">Sync to Cloud</p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <div className="img-consulting-parent">
                  <img
                    src="/assetsReact/consultingLogo2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>{" "}
                <p className="consultingLogoPara">Create your own Playlist</p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <div className="img-consulting-parent">
                  <img
                    src="/assetsReact/consultingLogo3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>{" "}
                <p className="consultingLogoPara">Share instantly</p>
              </div>
            </div>

            <a href="#" className="Consulting-btn mt-3 mt-lg-0 d-flex align-items-center position-relative ">
              <span className="LearnMore">Learn More</span>
              <FaArrowRight className="fw-900 Read-More-arrow position-absolute" />

            </a>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <div className="d-flex consulting-img-parent-main">
              
                <div className="consulting-img-1-parent  align-self-center">
                <img className="  consulting-img-1" src="/assetsReact/consultingImg2.jpg" alt="" />
                </div>
                <div className="consulting-img-2-parent">
                <img className="  consulting-img-2"  src="/assetsReact/consultingImg1.jpg" alt="" />
                </div>
            </div>
            <div className="consulting-img-3-parent">
            <img className="consulting-img-3" src="/assetsReact/consultingImg3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultingBusiness;
