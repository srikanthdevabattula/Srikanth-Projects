import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import chair from '../../../assets/NewInStore/chair.png'

import bed from '../../../assets/NewInStore/bed.png'
import cupboard from '../../../assets/NewInStore/cupboard.png'
import lighting from '../../../assets/NewInStore/lighting.png'

const NewInStore = () => {
  return (
    <div className='
    flex'>
      <div className='w-[25%] esm:w-[40%] pl-[5%] py-[4%] font-Roboto text-[#23262f] pr-[2%] '>
        <h1 className='font-bold text-[40px] lg:text-[35px] md:text-[25px] sm:text-[13px] mt-[15%] '>New In <br /> Store Now</h1>
        <p className='text-[16px] lg:text-[13px] md:text-[10px] sm:text-[8px] my-10 md:my-5 esm:my-1'>Get the latest items immediately with promo prices</p> 
        <Link className='text-[18px] lg:text-[15px] md:text-[12px] sm:text-[11px] font-bold'>Check All →</Link>
      </div>
      <div className='w-[75%] esm:w-[60%]'>
      <Swiper
       
        spaceBetween={20}
        breakpoints={{
          200: {
              slidesPerView: 1.5,
            },
          300: {
              slidesPerView: 2,
            },
          360: {
              slidesPerView: 2.2,
            },
            425: {
              slidesPerView: 2.2,
            },
           768: {
             slidesPerView: 2.8,
           },
           900: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 3.5,
            },
         
         }}
       
        
        className="mySwiper h-[90%] md:h-[80%] esm:h-[90%]  py-[3%] "
      >
        <SwiperSlide className='bg-[red] h-[100%] '>
          <img src={chair} alt="" className='h-[100%] w-[100%]' />
          <h3 className='text-center relative top-[-20%] font-bold text-[white] text-[28px] lg:text-[23px] sm:text-[15px] font-Roboto'>Chair</h3>
        </SwiperSlide>
        <SwiperSlide><img src={bed} alt="" className='h-[100%] w-[100%]' />
        <h3 className='text-center relative top-[-20%] font-bold text-[white] text-[28px] lg:text-[23px] sm:text-[15px] font-Roboto'>Bed</h3>
        </SwiperSlide>
        <SwiperSlide><img src={cupboard} alt="" className='h-[100%] w-[100%]' />
        <h3 className='text-center relative top-[-20%] font-bold text-[white] text-[28px] lg:text-[23px] sm:text-[15px] font-Roboto'>Cupboard</h3>
        </SwiperSlide>
        <SwiperSlide><img src={lighting} alt="" className='h-[100%] w-[100%] pr-1' />
        <h3 className='text-center relative top-[-20%] font-bold text-[white] text-[28px] lg:text-[23px] sm:text-[15px] font-Roboto'>Lighting</h3>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default NewInStore