import React from 'react'
import OurShopCard from '../PAGE/Ourshop/ourshopTab/OurShopCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const OrderShared = ({ourShopItem}) => {
  const pagination = {
    clickable: true,
    slidesPerView: 6,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div >




    <Swiper
    pagination={pagination}
    modules={[Pagination]}
    className="mySwiper"
  slidesPerView={6}
  >



    <SwiperSlide  className='mb-red-500'>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
    
    
    
    {ourShopItem.map((item) => (
      
      <OurShopCard item={item} key={Math.random()}></OurShopCard>
   
  ))}

    
    </div>
    
    
    
    
    </SwiperSlide>






  </Swiper>

    </div>
  )
}

export default OrderShared
