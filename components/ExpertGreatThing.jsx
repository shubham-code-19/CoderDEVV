import React, { useState } from "react";

import ExpertGreatThingBanner from "./ExpertGreatThingBanner";
import ExpertGreatThinVideo from "./ExpertGreatThinVideo";


const ExpertGreatThing = () => {
  const [opner,setOpner]=useState(0)

  const opnerHandler=()=>{
    setOpner(1)
  }
  const closeHandler=()=>{
    setOpner(0)
  }
  return (
    <>
      {opner?      <ExpertGreatThinVideo closeHandler={closeHandler}/>
      :<ExpertGreatThingBanner opnerHandler={opnerHandler}/>}
    </>
  );
};

export default ExpertGreatThing;
