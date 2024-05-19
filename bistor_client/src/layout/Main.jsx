import React from 'react'
import Navbar from './../shared/navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/footer/Footer';

const Main = () => {
  const location=useLocation()
const noNav$Foot=location.pathname.includes('login')
console.log(noNav$Foot)
  return (
    <div className='container mx-auto p-4'>
  {
    noNav$Foot ||
    <Navbar></Navbar>
  }
 
    <Outlet></Outlet>

    {
      noNav$Foot || <Footer></Footer>
    }
    </div>
  )
}

export default Main
