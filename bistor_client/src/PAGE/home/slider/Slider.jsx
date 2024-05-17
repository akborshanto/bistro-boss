import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'


// import required modules






const Slider = () => {
//     const [sliderIitem,setSliderIitem]=useState([])

   
//  const imgs=[

//     {img:"https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?t=st=1715882172~exp=1715885772~hmac=ffc805b49dda8f6f1d5ef202ae34f49f0ec5ec2329ec4a8639b4b9263f8ac6a0&w=740"},
//     {img:"https://img.freepik.com/free-photo/delicious-donuts_144627-6267.jpg?t=st=1715883163~exp=1715886763~hmac=b99329462a09296b794cf3b62b15314ff12b35fcea8f32dd733087bbe1df4b40&w=740"},
//     {img:"https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?t=st=1715883284~exp=1715886884~hmac=eda4ecd1458f8021cfa996351da642f8e11250d770e928469a2352384594cf57&w=740"},
    

// ]


/* useEffect(()=>{
const fetchData=async ()=>{


try{
    const response=await fetch(imgs)
    const result= response.json()
setSliderIitem(result)

}catch(err){
console.log(err)
}



}




fetchData()
},[])
 */



  return (

      <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><div>  <img src={slider1} /></div></SwiperSlide>
      <SwiperSlide><div>  <img src={slider2} /></div></SwiperSlide>
      <SwiperSlide><div>  <img src={slider3} /></div></SwiperSlide>
      <SwiperSlide><div>  <img src={slider4} /></div></SwiperSlide>

    </Swiper>



  )
}

export default Slider
