import React, { useState } from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import view1 from '../../../assets/view1.png'
import view2 from '../../../assets/view2.png'
import {IoSearchSharp} from 'react-icons/io5'
import { FaRegHeart } from "react-icons/fa";

import {AiOutlineShoppingCart} from 'react-icons/ai'

import { ProductsDetails } from '../../../Data/Products';

const Filter = ({show,setShow}) => {
    
  return (
    <div>

        <div className='flex sm:flex-col sm:justify-around justify-between items-center px-[7%] bg-[#FFDA18] h-[100px] font-poppins text-[20px] md:text-[14px] sm:text-[12px]'>
        <div className='flex space-x-7'>
            <div className='flex items-center space-x-3'><GiSettingsKnobs /><h5>Filter</h5></div>
            <div className='flex items-center space-x-4'>
                <img src={view1} alt="" />
                <img src={view2} alt="" />
            </div>
            <div>|</div>
            <p className='text-[16px] md:text-[12px] sm:text-[9px]'>Showing 1-{show} of {ProductsDetails.length} results</p>
         </div>
         <div className='flex space-x-8 md:space-x-3 '>
            <div className='flex space-x-4 items-center'><h5>Show</h5> <input type='number' placeholder='4-16'min="4" max="16" value={show} className='bg-[white] p-[8px] text-[#9F9F9F] w-[60px] text-center ' onChange={(e)=>setShow(e.target.value)} inputMode="numeric"/></div>

            
            <div className='flex space-x-4 items-center'><h5>Sort by</h5> <h5 className='bg-[white] p-[8px] px-[24px] text-[#9F9F9F]  '>Default</h5></div>
         </div>

        </div>

        <div className='flex justify-between px-[5%] my-5 items-center'>
        <div className='h-[40px] sm:h-[35px] w-[244px] lg:w-[240px] md:w-[280px] sm:w-[160px] flex border-[0.86px] bg-[#B7B7B726] border-[#FFFFFF99] rounded-[42px] justify-center items-center px-2 '>
        <input type="text" name="" id="" placeholder='Search furniture' className='bg-transparent placeholder:text-[#000000] outline-none w-[80%] sm:placeholder:text-[10px] sm:pb-1' />
        <IoSearchSharp className='bg-[#FFDA18] rounded-[24px] p-[3px] text-[25px] text-[white]' />
      </div>

            <div className='space-x-6 md:space-x-3 flex'>
        <button className='flex justify-center items-center space-x-2 border-[0.5px] border-[#6C6A6A] rounded-[15px] h-[52px] w-[170px] lg:h-[45px] lg:w-[140px] sm:h-[25px] sm:w-[80px]'>
          <FaRegHeart  className=' bg-[white] rounded-[20px] text-[25px] sm:text-[15px] p-[2px] border-[1px] border-[black]' />
          <p className='text-[#000000] text-[24px] lg:text-[20px] sm:text-[10px] font-medium font-poppins'>Wishlist</p>
        </button>
        <button className='flex justify-center items-center space-x-2 border-[0.5px] border-[#6C6A6A] rounded-[15px] h-[52px] w-[170px] lg:h-[45px] lg:w-[140px] sm:h-[25px] sm:w-[80px]'>
          <AiOutlineShoppingCart className='text-[25px] sm:text-[15px]' />
          <p className='text-[#000000] text-[24px] lg:text-[20px]  sm:text-[10px] font-medium font-poppins'>My Cart</p>
        </button>
      </div>
        </div>
    </div>
  )
}

export default Filter