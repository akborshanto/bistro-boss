import React from "react";

/* import React, { useRef, useState } from 'react'; */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

/* import './styles.css';
 */
// import required modules
import { Pagination } from "swiper/modules";

import logo1 from "../../../assets/home/01.jpg";
import logo2 from "../../../assets/home/02.jpg";
import logo3 from "../../../assets/home/03.png";
import logo4 from "../../../assets/home/04.jpg";
import logo5 from "../../../assets/home/05.png";
import Navbar from './../../../shared/navbar/Navbar';
import Cover from "../../../sharedComponent/Cover";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide style={{backgroundImage: `url("${logo2}") `, color:"white", height:"auto",background:"cover"}}>
          <div >
     
    {/*         <img src={logo1} alt="" /> */}
            <Navbar></Navbar>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={logo2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={logo3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={logo4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={logo5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
