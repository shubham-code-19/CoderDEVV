import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";


const FaqRview = () => {
    const[toogle,setToogle]=useState(0)
    const [toogle2,setToogle2]=useState(0)
    const faqHandler=()=>{
        setToogle(!toogle)
        setToogle2(0)

    }
    const faqHandler2=()=>{
        setToogle2(!toogle2)
        setToogle(0)

    }
  return (
    <div className='faq-section' id='myFaq'>
      <div className="container">
        <div className="row">
        <div className="col-12 text-center d-flex flex-column align-items-center meet-faq  ">
                <div className=' top-rated-company2 top-rated-company2-main'>
                <h6 >Top Rated Company </h6>
                </div>
                <h2 className='choise choise-width choise-width-pricing Faq-meet'> Meet Our Expert Team</h2>
                </div>
        </div>

        <div className={`main-faq-parent mt-5 ${toogle2&&"main-faq-parent-condtion"}`}>
            {/* <div className="faq1 "  style={{background:toogle?"red":"yellow"}}> */}
            <div className="faq1 mb-5 "  style={{height:toogle?"30rem":"5rem"}}>
                <div onClick={faqHandler} style={{background:toogle?"#EBF1EA":"white"}} className="faq-question d-flex  justify-content-between align-items-center">
                    <h2 className='Revisting'>Revisting Your InvestMents & Distibutions Goals</h2>
                    <FaAngleRight className='Question-arrow' style={{rotate:toogle&&"90deg"}} />

                </div>
                <div className="faq-answer  mt-5 d-flex flex-column flex-md-row  justify-content-center">
                        <div className='d-flex gap-3'>
                            <img className='faq-answer-img ' src="./assetsReact/asset40.jpeg" alt="" />
                            <img className='faq-answer-img' src="./assetsReact/asset40.jpeg" alt="" />
                        </div>
                        <div className='d-flex flex-column    justify-content-center'>
                            <h2 className='Revisiting'>Revisiting Your Investment Distribution Goals</h2>
                            <p className='faq-para'>Every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty obligations of business</p>
                        </div>
                </div>
            </div>


            <div className="faq1   "  style={{height:toogle2?"30rem":"5rem"}}>
                <div onClick={faqHandler2} style={{background:toogle2?"#EBF1EA":"white"}} className="faq-question d-flex  justify-content-between align-items-center">
                    <h2 className='Revisting'>Revisting Your InvestMents & Distibutions Goals</h2>
                    <FaAngleRight className='Question-arrow' style={{rotate:toogle2&&"90deg"}} />

                </div>
                <div className="faq-answer faq2-answer mt-5 d-flex flex-column flex-md-row gap-5 justify-content-center ">
                        <div className='d-flex gap-3'>
                            <img className='faq-answer-img' src="./assetsReact/asset40.jpeg" alt="" />
                            <img className='faq-answer-img' src="./assetsReact/asset40.jpeg" alt="" />
                            
                        </div>
                        <div className='d-flex flex-column    justify-content-center'>
                            <h2 className='Revisiting'>Revisiting Your Investment Distribution Goals</h2>
                            <p className='faq-para'>Every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty obligations of business</p>
                        </div>
                </div>
            </div>



            
        </div>
      </div>
    </div>
  )
}

export default FaqRview
