import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import Quitque from '../components/Quitque'
import DigitalFuture from '../components/DigitalFuture'
import ChoiseRight from '../components/ChoiseRight'
import Experience from '../components/Experience'
import PricingPlans from '../components/PricingPlans'
import ConsultingBusiness from '../components/ConsultingBusiness'
import ExpertGreatThing from '../components/ExpertGreatThing'
import SemlessIntegration from '../components/SemlessIntegration'
import MyFooter from '../components/MyFooter'
import InstaSwiper from "../components/InstaSwiper"
import FiveCentuary from '../components/FiveCentuary'
import FaqRview from '../components/FaqRview'
import {useLocation} from 'react-router-dom'
const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      console.log(hash,'hash')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
      <Hero/>
      <Quitque/>
      <DigitalFuture/>
      <ChoiseRight/>
      <Experience/>
      <PricingPlans/>
      <ConsultingBusiness/>
      <ExpertGreatThing/>
      <SemlessIntegration/>
      <FaqRview/>
      <FiveCentuary/>
      <InstaSwiper/>
      <MyFooter/>
      </>
  )
}

export default Home
