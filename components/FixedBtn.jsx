import React,{useState,useEffect} from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

const FixedBtn = () => {
    const[count,setCount]=useState(0)
  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setCount(scrollY)
    }
    )
  },[])
//   console.log(count)
  return (
    <div>
    <a href="#myHero">
    <FaArrowCircleUp  className={`Greenn-stick-btn ${count>400?"Greenn-stick-btn-style":""} `} />

    </a>
    </div>
  )
}

export default FixedBtn
