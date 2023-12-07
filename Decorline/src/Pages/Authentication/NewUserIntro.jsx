import React from 'react'
import start from '../../assets/start.png'
import logo from '../../assets/Logo.png'
import { MdArrowForwardIos } from "react-icons/md";
import { LuFacebook,LuTwitter,LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserIntro = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${start})`,
        
      };
  return (
    <div className='h-[100vh]'>
        <div className='flex sm:flex-col  items-center sm:items-start '>
            <div className='flex-1 sm:order-2 h-[100vh]   p-[5%_0%_5%_5%] sm:p-1 sm:flex-2 w-[100%]  ' >
                <div className='h-[80vh] border-black  border-t-[5px] border-l-[5px] border-b-[5px] sm:border-[5px]  flex flex-col items-center justify-between pt-[3%] pb-[8%]'>
                    <h3 className='font-Staatliches text-[18px] lg:text-[15px]'>Decospace34@gmail.com</h3>
                    <h1 className='font-Roboto text-[48px] lg:text-[40px] md:text-[30px] font-bold text-center '>Design your <br /> Home with us</h1>
                <Link to='/register'>  <button className='bg-[#FFDA18] hover:text-[#ffffff]  h-[72px] lg:h-[60px] w-[289px] lg:w-[250px] md:w-[200px] rounded-[20px] text-[34px] lg:text-[28px] md:text-[22px]  font-Staatliches flex justify-center items-center'>Get Started <MdArrowForwardIos className='text-[white] ml-4' /></button></Link> 
                    <div className='flex space-x-3'><LuFacebook /> <FaInstagram /> <LuTwitter /> <LuYoutube /></div>
                </div>
            </div>
            <div className='flex-1 bg-cover bg-center h-[100vh]  p-[5%_5%_5%_0%] sm:p-1 ' style={backgroundImageStyle}>
                <div className=' h-[80vh] sm:h-[30vh] border-black border-t-[5px] border-r-[5px] border-b-[5px] sm:border-[5px] flex justify-center items-center'>
                    <img src={logo} alt="" className=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserIntro