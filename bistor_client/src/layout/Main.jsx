import React from 'react'
import Navbar from './../shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';

const Main = () => {
  return (
    <div className='container mx-auto p-4'>
  
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Main
