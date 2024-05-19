import React from 'react'
import  cover from '../assets/menu/banner3.jpg'
import { Link } from 'react-router-dom';
const Cover = ({img,title,statement}) => {
  return (
    <div>
    <div className="hero min-h-screen" style={{backgroundImage: `url("${img}")`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md bg-gray-400  z-[10] text-black  p-8">
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <p className="mb-5">{statement}</p>
   
      </div>
    </div>
  </div>

    </div>
  )
}

export default Cover
