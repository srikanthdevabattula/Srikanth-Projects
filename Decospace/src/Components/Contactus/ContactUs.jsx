import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import blog from '../../assets/ANmain.png'
import ContactUsForm from './ContactusForm';
const ContactUs = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
  
    const [ContactFormOpen, setContactForm] = useState(false);
  return (
    <div>
          <div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins'>Contact Us</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '>Contact Us</p>
    </div>
      </div>

    <div className='p-[3%] font-Roboto space-y-3 sm:space-y-1'>
        <h1 className='font-bold text-[48px] lg:text-[40px] md:text-[35px] sm:text-[23px]'>Want to Know more?</h1>
        <p className='text-[19px] lg:text-[17px] md:text-[15px] sm:text-[10px] w-[80%] sm:w-[100%]'>If you are interested in learning more about our services, please contact us today. We would be happy to answer your questions and discuss your project.</p>
        <button className=''></button>
        <button
        className="openModalBtn bg-[#FFDA18] font-bold text-[23px] lg:text-[18px] md:text-[16px] sm:text-[13px]  p-[20px_50px] md:p-[15px_30px] sm:p-[10px_20px] rounded-[20px]"
        onClick={() => {
         
          setContactForm(true);
        }}
      >
        Contact Us
      </button>

      {ContactFormOpen && <ContactUsForm setContactForm={setContactForm} />}
    </div>

    </div>
  )
}

export default ContactUs