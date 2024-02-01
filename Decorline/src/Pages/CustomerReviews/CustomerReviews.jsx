import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {IoIosArrowForward} from 'react-icons/io'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import blog from '../../assets/ANmain.png'
import { Reviews } from '../../Data/Reviews';
import {AiTwotoneStar} from 'react-icons/ai'
import {BiSolidStarHalf} from 'react-icons/bi'
import axios from 'axios';
import { motion } from 'framer-motion'
const CustomerReviews = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };

      const [reviews, setReviews] = useState([]);

      useEffect(() => {
        const fetchReviews = async () => {
          try {
            // Replace 'your_api_url_here' with the actual URL of your API endpoint
            const response = await axios.get('your_api_url_here');
            setReviews(response.data); // Assuming the API response is an array of reviews
          } catch (error) {
            console.error('Error fetching reviews:', error);
          }
        };
    
        fetchReviews();
      }, []);
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    // transition={{ duration: 0.3 }}
    exit={{x:window.innerWidth,transition: {duration:0.1}}}
    >
     <div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins font-bold'>Customer Reviews</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '>Customer Reviews</p>
    </div>
      </div>

<h1 className='font-Roboto font-bold text-[40px] md:text-[30px] sm:text-[20px] text-center my-8 sm:my-4'>Customer Testimonial</h1>
         <Swiper
       
       spaceBetween={20}
       breakpoints={{
         200: {
             slidesPerView: 2,
           },
         300: {
             slidesPerView: 2.5,
           },
         360: {
             slidesPerView: 3,
           },
           425: {
             slidesPerView: 3,
           },
           500:{
            slidesPerView:4,
            
           },
          768: {
            slidesPerView: 3,
          },
          1024: {
             slidesPerView: 3.4,
           },
           1185: {
            slidesPerView: 4,
           },
           1400: {
             slidesPerView: 4.5,
           },
        
        }}
      
       
       className="mySwiper mt-5 mb-[100px] md:mb-[60px] sm:mb-[30px] pl-[3%]"
     >

        {Reviews.map((data,index)=>
         <SwiperSlide key={index}>
         <div className='bg-[#C1C1C1] h-[321px] w-[291px] md:h-[280px] md:w-[250px] sm:w-[120px] sm:h-[160px] font-Roboto px-[4%]'>
              <div className='pt-8 pb-4 sm:pt-4 sm:pb-2 flex text-[#ffcb12] text-[24px] lg:text-[20px] md:text-[18px] sm:text-[12px]'>
                 {[...Array(Math.floor(data.rating))].map((_, i) => (
          <AiTwotoneStar key={i} />
        ))}
        {data.rating % 1 === 0.5 && <BiSolidStarHalf key="half" />}
        </div>
              <h1 className='text-[23px] md:text-[18px] sm:text-[10px]  font-bold '>{data.heading}</h1>
         
              <p className='text-[22px] md:text-[17px] sm:text-[9px] my-7 sm:my-3'>{data.review}</p>
              <h5 className='text-[28px] md:text-[24px] sm:text-[10px]'>{data.name}</h5>
         
         </div>
                   </SwiperSlide>)}
      
      
     </Swiper>
    </motion.div>
  )
}

export default CustomerReviews