import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";

 

const PricingCard = ({id,blub,plansName,price,pricePlans,cardBg}) => {
  return (
    <>
      <div className="col-lg-4 mt-5 mb-5 d-flex gap-5 flex-column" >
        <div className="p-card border border-3 border-dark rounded-5   d-flex gap-4 flex-column prcingCard-parent " style={{background:id==2&& "#142025" , color:id==2&& "white"}}>
          <div className="row align-items-center ">
            <div className="col-5 p-0">
              <div className="blub-pricing"  style={{background:blub,color:id==2&& "white"}}>
                <FaRegLightbulb className="bulb-pricing-child" />
              </div>
            </div>
            <div className="col-7 p-0">
              <h3 className="basicsPlans m-0">{plansName}</h3> 
              <p className="basicsPlans-monthly">{price}/{pricePlans}</p>
            </div>
          </div>

          <p className="everyPleasure" style={{color:id==2&& "#dadada"}}>
            Every pleasure is to be welcomed and every pain avoided. is to be
            welcomed and every  {id}
          </p>
<div className=" d-flex flex-column gap-5">
          <div className={`top-rated-hover top-rated-company2 getStarted-pricing  mb-lg-0 ${id==2&&"all-btn-hover"} `} style={{background:id==2&& "#2CC392",order:id==2&& "2"}}>
            <h3 className={`PricingGetStarted `}>Get Started</h3>
            
          </div>

          <div className=" d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-3 ">
              <IoMdCheckmarkCircle className="  fs-5 " style={{color:id==2&& "#2CC392"}} />
              <span className="digitalFiturePara pricingCardPara">
                Get high conversion rates
              </span>
            </div>

            <div className="d-flex align-items-center gap-3 ">
              <IoMdCheckmarkCircle className="  fs-5" style={{color:id==2&& "#2CC392"}} />
              <span className="digitalFiturePara pricingCardPara" >
                Virtual Private Server
              </span>
            </div>

            <div className="d-flex align-items-center gap-3 ">
              <IoMdCheckmarkCircle className="  fs-5" style={{color:id==2&& "#2CC392"}} />
              <span className="digitalFiturePara pricingCardPara">
                Get high conversion rates
              </span>
            </div>
          </div>
</div>
          <div className="below-black-box " style={{background:id==2&& "#2CC392"}}>
          14-day free trial - No credit card Required
          </div>
        </div>
        
      </div>
    </>
  );
};

export default PricingCard;
