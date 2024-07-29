import React from 'react'
import PricingCard from './PricingCard'
import priceCardData from './PricingData'
const PricingPlans = () => {
 
  return (
    <>
        <div className="container PricingPlans" id='myPlans'>
        <div className="row">
                <div className="col-12 text-center d-flex flex-column align-items-center top-rated-comapny-parent  ">
                <div className=' top-rated-company2 top-rated-company2-main'>
                <h6 >Top Rated Company </h6>
                </div>
                <h2 className='choise choise-width choise-width-pricing'>Choice The Right Pricing Plan That Suits your Need</h2>
                </div>
            </div>

            <div className="row mb-5">
            {priceCardData.map((elm)=>{
              return <PricingCard key={elm.id} {...elm}/>
              
            })}
           

           
            </div>
        </div>
    </>
  )
}

export default PricingPlans
