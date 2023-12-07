import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import sofa from '../../../assets/Discount/sofa.png'
import discount from '../../../assets//Discount/discount.png'

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

const DiscountSlides = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${sofa})`,
        
      };
      const backgroundImage2 = {
        backgroundImage: `url(${discount})`,
        
      };
  return (
    <div className='my-8 sm:my-4'><Swiper
    spaceBetween={30}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination,Autoplay]}
    className="mySwiper h-[530px] lg:h-[430px] md:h-[320px] sm:h-[150px] px-[2%]"
  >
    <SwiperSlide className=''>
        <div className='flex bg-cover bg-center rounded-[35px] h-[100%] ' style={backgroundImageStyle}>
            <div className='flex-1 bg-cover bg-center rounded-[35px] p-[5%] space-y-4 sm:space-y-2 font-Roboto' style={backgroundImage2}>
            <h1 className='font-bold text-[60px] lg:text-[50px] md:text-[40px] sm:text-[17px]  text-[white]'>High quality sofa
started</h1>
<h1 className='text-[#FFDA18] font-bold text-[48px] lg:text-[40px] md:text-[30px] sm:text-[15px]'>70% off</h1>
<p className='text-[#FFDA18] text-[30px] lg:text-[25px] md:text-[20px] sm:text-[13px]'>See all items →</p>
            </div>
            <div className='flex-1'></div>
            
        </div>
    </SwiperSlide>
    <SwiperSlide>   <div className='flex bg-cover bg-center rounded-[35px] h-[100%] ' style={backgroundImageStyle}>
            <div className='flex-1 bg-cover bg-center rounded-[35px] p-[5%] space-y-4 sm:space-y-2 font-Roboto' style={backgroundImage2}>
            <h1 className='font-bold text-[60px] lg:text-[50px] md:text-[40px] sm:text-[17px]  text-[white]'>High quality sofa
started</h1>
<h1 className='text-[#FFDA18] font-bold text-[48px] lg:text-[40px] md:text-[30px] sm:text-[15px]'>70% off</h1>
<p className='text-[#FFDA18] text-[30px] lg:text-[25px] md:text-[20px] sm:text-[13px]'>See all items →</p>
            </div>
            <div className='flex-1'></div>
            
        </div></SwiperSlide>
    <SwiperSlide>  <div className='flex bg-cover bg-center rounded-[35px] h-[100%] ' style={backgroundImageStyle}>
            <div className='flex-1 bg-cover bg-center rounded-[35px] p-[5%] space-y-4 sm:space-y-2 font-Roboto' style={backgroundImage2}>
            <h1 className='font-bold text-[60px] lg:text-[50px] md:text-[40px] sm:text-[17px]  text-[white]'>High quality sofa
started</h1>
<h1 className='text-[#FFDA18] font-bold text-[48px] lg:text-[40px] md:text-[30px] sm:text-[15px]'>70% off</h1>
<p className='text-[#FFDA18] text-[30px] lg:text-[25px] md:text-[20px] sm:text-[13px]'>See all items →</p>
            </div>
            <div className='flex-1'></div>
            
        </div></SwiperSlide>
   
  </Swiper></div>
  )
}

export default DiscountSlides