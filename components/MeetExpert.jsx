import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const MeetExpert = () => {
  const [toogle, setToogle] = useState(0);
  const [toogle2, setToogle2] = useState(0);
  const FaqHandler = () => {
    setToogle(!toogle);
  };
  const FaqHandler2 = () => {
    setToogle2(!toogle2);
  };

  return (
    <>
      <section id="Faq" className="container MeetExpert">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <div className=" top-rated-company2 top-rated-company2-main ">
              <h6>Top Rated Company </h6>
            </div>
            <h2 className="startConsulting meetOurExpert ">
              Meet Our Expert Team
            </h2>
          </div>

        <div className="mainfaqparent mt-5 border border-5">
            <div className={`faq1 ${toogle?"faq1height":"faq1height2"}`}>
                <div onClick={FaqHandler} className="faqQuestion d-flex justify-content-between align-items-center">
                    <h2 className="text-capitalize">Revisting Your investmnets & distribution goals</h2>
                    <IoIosArrowForward />

                </div>
                <div className="faqAnswer row justify-content-between align-items-center mt-4">
                    <div className="col-6 d-flex gap-3">
                    <img className='img-fluid' src="/assetsReact/asset40.jpeg" alt="" />
                    <img className='img-fluid' src="/assetsReact/asset40.jpeg" alt="" />

                    </div>
                    <div className="col-6">
                      <h2>Revisiting Your Investment Distribution Goals</h2>
                      <p>Every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty obligations of business</p>
                    </div>
                </div>
            </div>








            <div className="faq2"></div>
        </div>

          
        </div>
      </section>
    </>
  );
};

export default MeetExpert;
