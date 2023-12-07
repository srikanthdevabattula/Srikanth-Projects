import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import blog from '../../assets/ANmain.png'
import { Link } from 'react-router-dom';
import Contactusform from './Components/Contactusform';
import Services from '../Store/Components/Services';
const GetInTouchWithUs = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
  return (
    <div>


<div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins font-bold'>Contact Us</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '>Contact Us</p>
    </div>
      </div>

<Contactusform/>
<Services/>

    </div>
  )
}

export default GetInTouchWithUs