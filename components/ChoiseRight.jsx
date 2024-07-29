import React, { useState } from 'react'
import ChoiseRightCard from './ChoiseRightCard'

const ChoiseRight = () => {
    "asset10","asset11","asset12","asset13","asset14","asset15"
    const cardsImages=[
        {
            id:1,
            meet:"Chat Application",
            img:"asset10"
        },
        {
            id:2,
            meet:"VideoMeeting",
            img:"asset11"
        },
        {
            id:3,
            meet:"SocailApps",
            img:"asset15"
        },
        {
            id:4,
            meet:"Insta Meet",
            img:"asset12"
        },
        {
            id:5,
            meet:"Trading",
            img:"asset13"
        },
        {
            id:6,
            meet:"Client Meetup",
            img:"asset14"
        },

    ]
    // const filterData = cardsImages.filter()
    const [filterdta , setFilterData] = useState(cardsImages)
    const FilterCard = (elment)=>{
        if (elment == "To Show All"){
            setFilterData(cardsImages)
        }else{
            console.log(elment)
            setFilterData( cardsImages.filter(conten => conten.meet.toLowerCase() == elment.toLowerCase() ))
        }
        
        // setFilterData(filterData)

    }
   
  return (
    <div className='choiseRightMain'>
      <div className="container">
            <div className="row">
                <div className="col-12 text-center d-flex flex-column align-items-center top-rated-comapny-parent  ">
                <div className=' top-rated-company2 '>
                <h6 >Top Rated Company </h6>
                </div>
                <h2 className='choise'>Choice The Right Pricing</h2>
                </div>
            </div>
         
         {/* cards */}
         <div className="row justify-content-center mt-5 gap-">

         
          {  ['To Show All','Trading','VideoMeeting','SocailApps'].map(((elm)=>{
            return(<>
                <div className="col-12  col-md-3 d-flex justify-content-center">
               <a className='pricing-card-btnsss mt-3'
               onClick={()=>FilterCard(elm)}
               >{elm}</a>
               </div>
               
            </>)
          }))}
         </div>
         
         <div className="row  row-cols-md-3 mt-5 justify-content-center">
         {filterdta.map((elm)=>{
            return <ChoiseRightCard  key={elm.id}  {...elm}/>
         })}
           
           
         </div>
      </div>
    </div>
  )
}

export default ChoiseRight
