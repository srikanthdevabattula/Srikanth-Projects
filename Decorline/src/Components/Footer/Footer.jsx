import React, { useState } from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {FaLocationDot,FaSquareInstagram} from 'react-icons/fa6'
import {IoMail} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {AiFillFacebook , AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai'
import axios from 'axios'
const Footer = () => {
    const [email, setEmail] = useState('');

  
    // const handleSubscribe = async () => {
    //     try {
    //       const response = await fetch('http://localhost:3001/subscribe', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email }),
    //       });
    
    //       if (response.ok) {
    //         console.log('Subscription successful!');
    //         // You can add further logic here, like showing a success message to the user.
    //       } else {
    //         console.error('Subscription failed.');
    //         // Handle subscription failure, display an error message, etc.
    //       }
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };


    const handleSubscribe = async () => {
        try {
          const response = await axios.post('http://api/subscribe', { email });
    
          if (response.status === 200) {
            console.log('Subscription successful!');
            // You can add further logic here, like showing a success message to the user.
          } else {
            console.error('Subscription failed.');
            // Handle subscription failure, display an error message, etc.
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div className='bg-[#C1C1C1] flex text-[#FFFFFF] justify-between space-x-4  py-[5%] px-[5%] sm:px-[3%]'>
        
        <div className='w-[30%]  space-y-2'>
            <h4 className='font-bold font-Roboto text-[28px] lg:text-[26px] md:texxt-[22px] sm:text-[14px]' >INFORMATION</h4>
            <p className='font-poppins text-[16px] lg:text-[14px] md:text-[11px] sm:text-[6px]'>DecoSpace is an interior design company that specializes in residential and commercial spaces. We have over 20 years of experience in the industry, and our team of talented designers is dedicated to creating beautiful, functional spaces that reflect our clients' individual style.</p>
            <div className='flex text-[#757575] space-x-2 text-[30px] md:text-[25px] sm:text-[17px]'>
                <AiFillFacebook/>
                <AiFillTwitterSquare/>
                <FaSquareInstagram/>
                <AiFillLinkedin/>
            </div>
        </div>
        <div className='space-y-3 sm:space-y-1'>
            <h4 className='font-bold font-Roboto text-[28px] lg:text-[26px] md:texxt-[22px] sm:text-[14px]'>NAVIGATION</h4>
            <Link to='/' className='flex items-center font-poppins text-[16px] lg:text-[14px] md:text-[11px] sm:text-[8px]'><MdKeyboardArrowRight className='text-[#757575]'/> Homepage</Link>
            <Link to='/' className='flex items-center font-poppins text-[16px] lg:text-[14px] md:text-[11px] sm:text-[8px]'><MdKeyboardArrowRight className='text-[#757575]'/>About Us</Link>
            <Link to='/' className='flex items-center font-poppins text-[16px] lg:text-[14px] md:text-[11px] sm:text-[8px]'><MdKeyboardArrowRight className='text-[#757575]'/>Services</Link>
            <Link to='/Blog' className='flex items-center font-poppins text-[16px] lg:text-[14px] md:text-[11px] sm:text-[8px]'><MdKeyboardArrowRight className='text-[#757575]'/>Articles & Blogs</Link>

        </div>
        <div className='space-y-3 sm:space-y-1'>
<h4 className='font-bold font-Roboto text-[28px] lg:text-[26px] md:texxt-[22px] sm:text-[14px] esm:text-[10px]'>CONTACT US</h4>
<p className='font-poppins text-[16px] lg:text-[14px] md:text-[11px] sm:text-[7px] flex items-center '><FaLocationDot className='text-[#757575] mr-1'/> Kolkata Barasat</p>
<p className='font-poppins text-[16px] lg:text-[14px] md:text-[11px] sm:text-[7px] esm:text-[5px] flex items-center'><IoMail className='text-[#757575] mr-1'/> Decodecor34@gmail.com</p>
<input
          type="email"
          name=""
          id="email-input"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-[80%] esm:w-[100%] h-[20%] sm:placeholder:text-[12px] placeholder:text-[white] bg-[#d1d1d1]  border-b-[3px] border-b-[#4c4b4b]'
        />
        <br />
        <button
          onClick={handleSubscribe}
          className='bg-[#000000] text-[white] text-[15px] md:text-[12px] sm:text-[9px] p-[10px_20px] sm:p-[6px_10px]'>
          SUBSCRIBE
        </button>
        </div>
        
        </div>
  )
}

export default Footer