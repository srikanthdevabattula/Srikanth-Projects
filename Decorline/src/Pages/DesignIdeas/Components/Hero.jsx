import React from 'react'
import hero from '../../../assets/ANmain.png'
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io'


const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${hero})`,
        
      };
  return (
    <div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins font-bold'>Design ideas</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '>Design ideas</p>
    </div>
      </div>
  )
}

export default Hero