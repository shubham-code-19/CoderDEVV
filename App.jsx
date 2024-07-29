import React from 'react'
import "./App.css"
import "./Responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

import About from "../src/Pages/About"
import Faq from './Pages/Faq'
import Nav from './components/Nav';
import Home from './Pages/Home';
import Service from './Pages/Service'
import Plans from './Pages/Plans';
import Teams from './Pages/Teams';
import GreenFooterLine from './components/GreenFooterLine';
import FixedBtn from './components/FixedBtn';

const App = () => {
  return (
    <> 
    <BrowserRouter>
      <Nav/>
     

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/faq' element={<Faq/>} />
      </Routes>
      <GreenFooterLine/>
      <FixedBtn />


      </BrowserRouter>
    </>
  )
}

export default App





