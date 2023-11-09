import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowForward,IoIosArrowDroprightCircle} from 'react-icons/io'
import an1 from '../../assets/AN1.png'
import an2 from '../../assets/AN2.png'
import an3 from '../../assets/AN3.png'
const Blogs = () => {
  return (
    <div>
      <div className='bg-blog bg-cover bg-center h-[316px] flex text-[white] flex-col justify-center items-center'>
    <h1 className='text-[48px] font-poppins'>About Us</h1>
    <div className='flex space-x-3 items-center'>
    <Link to='/' className='font-poppins font-medium text-[16px] '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light'>Articles &News</p>
    </div>
      </div>
      <div className='flex justify-between px-[3%] items-center mt-3'>
        <h1 className='font-bold text-[#292F36] text-[48px] font-Roboto lg:text-[40px] md:text-[30px] sm:text-[22px]'>Articles & News</h1>
        <Link to='/' className='text-[#FFDA18] text-[24px] font-poppins sm:text-[10px] md:text-[18px]'>View all → </Link>
      </div>


    <div className='flex justify-between my-4 mx-6 lg:mx-4 sm:mx-0 text-[white] sm:flex-col sm:items-center sm:space-y-6'>
      <div className='bg-[#787878] h-[550px] lg:h-[450px] md:h-[360px] w-[30%] xl:w-[27%] sm:w-[270px] py-3  px-[1%] sm:px-[5%]  space-y-10 '>
        <img src={an1} alt="" className='h-[50%] w-[100%] ' />
        <p className='text-[25px] lg:text-[18px]  md:text-[12px] w-[90%]  font-poppins'>Let’s Get Solution For Building Construction Work</p>
        <div className='flex items-center justify-between'>
          <p className='text-[19px] lg:text-[17px] md:text-[13px]'>26 December,2022 </p>
          <IoIosArrowDroprightCircle className='text-[50px] lg:text-[40px] md:text-[30px]'/>

        </div>
        <div className='h-[43px] w-[137px] lg:h-[37px] md:h-[33px] md:w-[100px] bg-[white] rounded-[8.5px_8.5px_8.5px_0px] relative text-[17px] md:text-[12px] top-[-60%] left-4 lg:top-[-65%] md:top-[-70%] flex justify-center items-center'><p className='text-[black] '>Interior Design</p></div>
      </div>


      <div className='bg-[#787878] h-[550px]  lg:h-[450px] md:h-[360px] w-[30%] xl:w-[27%]  sm:w-[270px] py-3  px-[1%] sm:px-[5%]  space-y-10'>
        <img src={an2} alt="" className='h-[50%] w-[100%]' />
        <p className='text-[25px] lg:text-[18px] md:text-[12px] w-[90%]  font-poppins'>Low Cost Latest Invented Interior Designing
Ideas.</p>
        <div className='flex items-center justify-between'>
          <p className='text-[19px] lg:text-[17px] md:text-[13px]'>22 December,2022 </p>
          <IoIosArrowDroprightCircle className='text-[50px] lg:text-[40px] md:text-[30px]'/>

        </div>
        <div className='h-[43px] w-[137px] lg:h-[37px] md:h-[33px] md:w-[100px] bg-[white] rounded-[8.5px_8.5px_8.5px_0px] relative text-[17px] md:text-[12px] top-[-60%] left-4 lg:top-[-65%] md:top-[-70%] flex justify-center items-center'><p className='text-[black] '>Interior Design</p></div>
        
      </div>
      <div className='bg-[#787878] h-[550px]  lg:h-[450px] md:h-[360px] w-[30%] xl:w-[27%]  sm:w-[270px] py-3  px-[1%] sm:px-[5%]  space-y-10'>
        <img src={an3} alt="" className='h-[50%] w-[100%]' />
        <p className='text-[25px] lg:text-[18px]  md:text-[12px] w-[90%]  font-poppins'>Best For Any Office & Business Interior 
Solution</p>
        <div className='flex items-center justify-between'>
          <p className='text-[19px] lg:text-[17px] md:text-[13px] '>26 December,2022 </p>
          <IoIosArrowDroprightCircle className='text-[50px] lg:text-[40px] md:text-[30px]'/>

        </div>
           <div className='h-[43px] w-[137px] lg:h-[37px] md:h-[33px] md:w-[100px] bg-[white] rounded-[8.5px_8.5px_8.5px_0px] relative text-[17px] md:text-[12px] top-[-60%] left-4 lg:top-[-65%] md:top-[-70%] flex justify-center items-center'><p className='text-[black] '>Interior Design</p></div>
      </div>

      
    </div>

    </div>
  )
}

export default Blogs