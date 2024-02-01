import React from 'react'
import blog from '../../assets/ANmain.png'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { RiSettingsLine,RiMoneyDollarBoxLine } from "react-icons/ri"
import { BiBell } from "react-icons/bi";
import FAQSection from './components/FAQSection'
import { motion } from 'framer-motion'
const FAQ = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    // transition={{ duration: 0.3 }}
    exit={{x:window.innerWidth,transition: {duration:0.1}}}
    >

<div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins font-bold'>FAQ</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '> FAQ</p>
    </div>
      </div>
<div className='flex justify-center my-8'>
      <h1 className='bg-[#023020] text-[white] w-[640px] md:w-[400px] sm:w-[250px]  py-[25px] md:py-[15px] text-center text-[45px] md:text-[30px] sm:text-[18px] font-Roboto font-bold'>How can we help you?</h1>
      </div>

      <div className='flex justify-center space-x-3 esm:space-x-1 h-[277px] md:h-[230px] sm:h-[130px] my-14 sm:my-6'>
        <div className='h-[100%] w-[359px] lg:w-[300px] md:w-[230px] sm:w-[105px] bg-[#DFF1FF] flex flex-col items-center justify-center space-y-3 rounded-[20px]'>
        <BiBell  className='text-[#1573FE] text-[50px] lg:text-[45px] md:text-[40px] sm:text-[30px]'/>
        <p className='text-[#616161] text-[34px] font-Roboto lg:text-[28px] md:text-[20px] sm:text-[10px]'>Questions about</p>
        <h6 className='text-[#000000] text-[34px] font-poppins font-semibold lg:text-[28px] md:text-[20px] sm:text-[9px]'>Getting Started</h6>
        </div>
        <div className='h-[100%] w-[359px] lg:w-[300px] md:w-[230px] sm:w-[105px]  bg-[#E8FFEB] flex flex-col items-center justify-center space-y-3 rounded-[20px]'>
        <RiSettingsLine  className='text-[#049C6B] text-[50px] lg:text-[45px] md:text-[40px] sm:text-[30px]'/>
        <p className='text-[#616161] text-[34px] font-Roboto lg:text-[28px] md:text-[20px] sm:text-[9px]'>Questions about</p>
        <h6 className='text-[#000000] text-[34px] font-poppins font-semibold lg:text-[28px] md:text-[20px] sm:text-[9px]'>Payment Procedure</h6>
        </div>
        <div className='h-[100%] w-[359px] lg:w-[300px] md:w-[230px] sm:w-[105px]  bg-[#FFECEF] flex flex-col items-center justify-center space-y-3 rounded-[20px]'>
        <RiMoneyDollarBoxLine  className='text-[#DF1525] text-[50px] lg:text-[45px] md:text-[40px] sm:text-[30px]'/>
        <p className='text-[#616161] text-[34px] font-Roboto lg:text-[28px] md:text-[20px] sm:text-[9px]'>Questions about</p>
        <h6 className='text-[#000000] text-[34px] font-poppins font-semibold lg:text-[28px] md:text-[20px] sm:text-[9px]'>Payment Methods</h6>
        </div>
      </div>

      <FAQSection/>
         </motion.div>
  )
}

export default FAQ