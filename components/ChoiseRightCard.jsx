import React from "react";

const ChoiseRightCard = ({img,meet}) => {
  return (
    <>
      <div className=" mt-5">
          <div className="card-parent bg-white pb-4 rounded-5">
            <div>
            <img className='w-100 rounded-5 card-image-size' src={`/assetsReact/${img}.jpeg`} alt="" />
            </div>
            <div className="card-text-parent ">
              <span className="easy">Easy Cheating UI</span>
              <h2 className="vieoMeeting">{meet}</h2>

            </div>
          </div>
      </div>
    </>
  );
};

export default ChoiseRightCard;
