import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const SemlessIntegration = () => {
  return (
    <div className="SemlessIntegration-main" id="myService">
      <div className="container">
        <div className="row ">
          <div className="col-md-7 position-relative  ">
            <h6 className="connect-our-software">Connect our Software</h6>
            <h2 className="startConsulting ">
              Seamless integration With your Favorite
            </h2>

            <div className="seamless_img-grup mt-5 ">
              <div className="seamless_img-grup-sub ">
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-1.png" alt="" />
                </div>
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-2.png" alt="" />
                </div>
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-3.png" alt="" />
                </div>
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-4.png" alt="" />
                </div>
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-5.png" alt="" />
                </div>
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-6.png" alt="" />
                </div>
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-7.png" alt="" />
                </div>
                <div className="seamlessImg-parent-box">
                  <img src="./assetsReact/seamlessImg-8.png" alt="" />
                </div>
              </div>
              <div className=" py-5 text-center">
                <a
                  href="#"
                  className="Consulting-btn  text-uppercase   SemlessIntegration-btn"
                >
                  Get quote now
                </a>
               
              </div>
            </div>
          </div>
          <div className="col-md-5 position-relative mt-4 mt-lg-0 ">
            <p className="seamlessPara">
              A custom logo design is a crucial part of your overall branding
              Process. Your logo design is a sitgnificant. is a crucial part of
              your Overall branding part of your overall branding
            </p>
            <div className="d-flex align-items-center seamless-img-para-parent ">
              <div>
                <img src="./assetsReact/certified1.png" alt="" className="certified-img" />
              </div>
              <div>
                <h3 className="Seamless">Seamless integration</h3>
                <span className="SeamlessPackage">$29 / Package</span>
              </div>
            </div>

            <div className=" d-flex flex-column gap-4 mt-5 pb-4 ">
              <div className="d-flex align-items-center gap-3 ">
                <IoMdCheckmarkCircle className="text-success  fs-5 " />
                <span className="digitalFiturePara">
                  Data Storage and Analysis
                </span>
              </div>

              <div className="d-flex align-items-center gap-3 ">
                <IoMdCheckmarkCircle className="text-success  fs-5" />
                <span className="digitalFiturePara">
                  International Online Support
                </span>
              </div>

              <div className="d-flex align-items-center gap-3 ">
                <IoMdCheckmarkCircle className="text-success  fs-5" />
                <span className="digitalFiturePara">
                  Branding Project Development
                </span>
              </div>

              <div className="d-flex align-items-center gap-3 ">
                <IoMdCheckmarkCircle className="text-success  fs-5 " />
                <span className="digitalFiturePara">
                  Data Storage and Analysis
                </span>
              </div>
            </div>

            <div className="Seamless-mail d-flex gap-4 align-content-center">
                <div className="enevlop">
                <FaEnvelopeOpen className="eveelop-mail" />
                </div>
                <div className="get questions">
                    <span className="get-questions-headline">
                    Got questions? We've got answers
                    </span>
                    <h4 className="getThemeMail">Userthemes@gmail.com</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemlessIntegration;
