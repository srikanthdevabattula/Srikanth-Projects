import React from 'react'
import blog from '../../../assets/ANmain.png'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom'
const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
  return (
    <div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins font-bold'>Products</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/Store' className='font-poppins font-medium  '>Store</Link>
     <IoIosArrowForward/>
    <p className='font-light '>Products</p>
    </div>
      </div>
  )
}

export default Hero