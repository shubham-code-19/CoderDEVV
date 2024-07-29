import React, { useState } from "react"
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";


const Quitque=()=>{
    const[blubb,setblubb]=useState(false)
    const[blub2,setblubb2]=useState(false)
    const[blub3,setblubb3]=useState(false)

    
    
    return(
        <>
        <div className="container mt-5 mt-lg-5 pt-lg-5" >
            <div className="row">
                <div onMouseEnter={()=>setblubb(true)}  onMouseLeave={()=>setblubb(false)} className="col-md-4 d-flex flex-column flex-md-row align-items-center quitqueBlub-parent ">
                    <div id="greenBlub" className="quitqueBlub rounded-circle">
                   {!blubb && <FaRegLightbulb  className="bulb"/>}
                   {blubb && <FaLightbulb  className="bulb"/> }
                    </div>
                    <div className="quitque-text">
                        <h2>Quiqtue</h2>
                        <p >free trial plan to give a new start to your business,</p>
                    </div>
                </div>
                <div onMouseEnter={()=>setblubb2(true)}  onMouseLeave={()=>setblubb2(false)}  className="col-md-4 d-flex flex-column flex-md-row align-items-center quitqueBlub-parent ">
                     <div id="yellowBlub" className="quitqueBlub rounded-circle">
                     {!blub2 && <FaRegLightbulb  className="bulb"/>}
                     {blub2 && <FaLightbulb  className="bulb"/> }
                    </div>
                    <div className="quitque-text">
                        <h2>Quiqtue</h2>
                        <p>free trial plan to give a new start to your business,</p>
                    </div>
                </div>          
                <div onMouseEnter={()=>setblubb3(true)}  onMouseLeave={()=>setblubb3(false)} className="col-md-4 d-flex flex-column flex-md-row align-items-center quitqueBlub-parent ">
                    <div id="blueBlub" className="quitqueBlub rounded-circle">
                    {!blub3 && <FaRegLightbulb  className="bulb"/>}
                    {blub3 && <FaLightbulb  className="bulb"/> }                    </div>
                    <div className="quitque-text">
                        <h2>Quiqtue</h2>
                        <p >free trial plan to give a new start to your business,</p>
                    </div>
                </div>            </div>
        </div>

        </>
    )
}
export default Quitque;