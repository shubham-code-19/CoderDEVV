import React from 'react'
// import {params} from 'react-router-dom'
import {useParams} from "react-router-dom";

const About = () => {
  // console.log(params)
  const params = useParams();
  console.log(params)
  console.log(params.id)
  return (
    <div>
      <h1>hi im about {params.id} </h1>
    </div>
  )
}

export default About
