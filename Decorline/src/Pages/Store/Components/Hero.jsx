import React from 'react'
import StoreHero from '../../../assets/StoreHero.png'
import {IoSearchCircle,IoSearchSharp} from 'react-icons/io5'

import {AiOutlineShoppingCart,AiTwotoneHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${StoreHero})`,
        
      };
  return (
    <div className='xl:h-[773px] lg:h-[580px] md:h-[550px] sm:h-[400px] bg-cover bg-center' style={backgroundImageStyle}>
    <div className='flex justify-between p-[2%_3%] items-center'>
      <button className='bg-[#FFDA18] text-[white] rounded-[15px] font-bold font-Roboto text-[30px] lg:text-[20px] sm:text-[12px] p-[15px_20px] sm:p-[10px_10px] shadow-lg border-[0.5px] border-[black]'>
        Get Estimate
      </button>
      <div className='space-x-6 flex'>
        <button className='flex justify-center items-center space-x-2 border-[0.5px] border-[#6C6A6A] rounded-[15px] h-[62px] w-[170px] lg:h-[55px] lg:w-[140px] sm:h-[30px] sm:w-[80px]'>
          <AiTwotoneHeart className='text-[#F35353] bg-[white] rounded-[20px] text-[25px] sm:text-[15px] p-[2px] border-[1px] border-[black]' />
          <p className='text-[#F1E5E5] text-[24px] lg:text-[20px] sm:text-[10px] font-medium font-poppins'>Wishlist</p>
        </button>
       <Link to='/MyCart'> <button className='flex justify-center items-center space-x-2 border-[0.5px] border-[#6C6A6A] rounded-[15px] h-[62px] w-[170px] lg:h-[55px] lg:w-[140px] sm:h-[30px] sm:w-[80px]'>
          <AiOutlineShoppingCart className='text-[25px] sm:text-[15px]' />
          <p className='text-[#F1E5E5] text-[24px] lg:text-[20px]  sm:text-[10px] font-medium font-poppins'>My Cart</p>
        </button></Link>
      </div>
    </div>

    <div className='flex flex-col items-center text-center font-Roboto sm:mt-6'>
      <h1 className='font-bold xl:text-[80px] lg:text-[60px] md:text-[45px] sm:text-[25px] px-[10%] sm:px-[5%] text-[white]'>
        Creating spaces that are both timeless and stylish
      </h1>
      <h5 className='text-[23px] md:text-[18px] sm:text-[10px] text-[#ffffffce] xl:px-[32%] lg:px-[25%] md:px-[20%] sm:px-[10%]'>
        Turn your room with panto into a lot more minimalist and modern with ease and speed
      </h5>

      <div className='h-[40px] sm:h-[35px] w-[244px] lg:w-[240px] md:w-[280px] sm:w-[160px] flex border-[0.86px] bg-[#FFFFFF26] border-[#FFFFFF99] rounded-[42px] justify-center items-center px-2 mt-[2%] sm:mt-[5%]'>
        <input type="text" name="" id="" placeholder='Search' className='bg-transparent placeholder:text-[#FFFFFF99] outline-none w-[80%]' />
        <IoSearchSharp className='bg-[#FFDA18] rounded-[24px] p-[3px] text-[20px] text-[white]' />
      </div>
    </div>
  </div>
  )
}

export default Hero