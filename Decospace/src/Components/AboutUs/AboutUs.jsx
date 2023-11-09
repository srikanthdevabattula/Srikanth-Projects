import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom'
import Aboutus from '../../assets/aboutus.png'
import blog from '../../assets/ANmain.png'

import OurTeam from './OurTeam'
import {BsThreeDots} from 'react-icons/bs'

import whyus1 from '../../assets/whyus1.png'
import whyus2 from '../../assets/whyus2.png'
import whyus3 from '../../assets/whyus3.png'
import whyus4 from '../../assets/whyus4.png'

const AboutUs = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
  return (
    <div>
          <div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins'>About Us</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '>About Us</p>
    </div>
      </div>

      <div className='flex my-8 px-[3%]'>
        <div className='flex-1 font-Roboto'>
            <h1 className=' font-bold text-[48px] lg:text-[35px] md:text-[28px] sm:text-[20px] 2xl:pl-[10%]'>About Us</h1>
            <p className='text-[19px] 2xl:text-[25px] lg:text-[16px] md:text-[12px] sm:text-[7px] pr-[9%] mt-2 2xl:pr-0 2xl:pl-[10%]'>At DecoSpace, we believe that your home should be a reflection of your personality and lifestyle. We are a small, but experienced interior design and furniture company that is dedicated to creating beautiful and functional spaces that you will love. <br />
We offer a wide range of services, from consultation and planning to project management and installation. We work with you to understand your needs and goals, and then we create a design that is both stylish and practical. We also have a wide selection of furniture and accessories to choose from, so you can create a space that is truly your own. <br />
We are committed to providing our clients with the highest level of service. We are always available to answer your questions and concerns, and we work closely with you throughout the design process. We are confident that you will be happy with the results of our work.</p>
        </div>
        <div className='flex-1 flex justify-center'>
            <img src={Aboutus} alt="" className='h-[100%] ' />
        </div>
      </div>


      <div>
      <h1 className='font-bold text-[48px] lg:text-[38px] md:text-[30px] sm:text-[20px] pl-[3%] mb-3'>Our Philosophy</h1>
      <p className='px-[3%]  text-[19px] lg:text-[17px] md:text-[13px] sm:text-[8px]'>We believe that interior design is more than just about making a space look good. It is also about creating a space that is functional, comfortable, and inviting. We strive to create spaces that reflect our clients' personalities and lifestyles, and that make them feel happy and relaxed.
We also believe that interior design should be accessible to everyone. We offer a variety of services to fit different budgets and needs. We are also happy to work with clients who are new to interior design, and we will provide you with the guidance and support you need to create the space of your dreams.</p>
      
     <div className='flex justify-center text-[30px] sm:text-[18px] sm:my-3 text-[#807B7B] my-5'>
     <BsThreeDots/>
     <BsThreeDots/></div> 
      </div>

      <OurTeam/>

      <div className='flex justify-between px-[3%] py-6'>
        <div className='flex flex-col items-center space-x-3 space-y-2'>
            <img src={whyus4} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[25px] md:text-[19px] sm:text-[9px]'>Creative Expertise</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[23px] lg:text-[18px] md:text-[13px] sm:text-[7px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='flex flex-col items-center space-x-3 space-y-2'>
            <img src={whyus3} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[25px] md:text-[19px] sm:text-[9px]'>Budget Friendly</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[23px] lg:text-[18px] md:text-[13px] sm:text-[7px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='flex flex-col items-center space-x-3 space-y-2'>
            <img src={whyus2} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[25px] md:text-[19px] sm:text-[9px]'>Creative Expertise</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[23px] lg:text-[18px] md:text-[13px] sm:text-[7px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='flex flex-col items-center space-x-3 space-y-2'>
            <img src={whyus1} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[25px] md:text-[19px] sm:text-[9px]'>Best Quality</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[23px] lg:text-[18px] md:text-[13px] sm:text-[7px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

      </div>
    </div>
  )
}

export default AboutUs