import React from 'react'

import {AiFillStar} from 'react-icons/ai'
import {IoIosAddCircle} from 'react-icons/io'


const Cards = (props) => {
    const {id,productName,price,productImage,category,index,wishlist}=props.data;
  return (
    <div className='h-[482px] w-[318px] lg:w-[260px] lg:h-[400px] md:w-[190px] md:h-[300px] sm:w-[160px] sm:h-[270px]  bg-[#FFFFFF] space-y-3 lg:space-y-1 border-[0.3px] border-[#00000040] shadow-lg my-5 font-Roboto rounded-[20px]'>
     <div className='  bg-[#FAFAFA] flex justify-center rounded-[20px]'><img src={productImage} alt="" className='h-[50%] w-[80%]' /></div> 
      <p className='text-[#8D8D8D] text-[16px] lg:text-[14px] md:text-[12px] px-5'>{category}</p>
      <h1 className='font-bold text-[19px] lg:text-[17px] md:text-[14px] px-5 text-[#0D1B39]'>{productName}
      </h1>
      <div className='flex text-[#F6B76F] px-5'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>  </div>

      <div className='flex mt-3 justify-between items-center text-[15px] lg:text-[13px] md:text-[11px] font-semibold px-5 py-1 text-[#0D1B39]'><p>RS. {price}</p> <p className='text-[48px] lg:text-[40px] md:text-[30px]'><IoIosAddCircle/></p></div>
    </div>
  )
}

export default Cards