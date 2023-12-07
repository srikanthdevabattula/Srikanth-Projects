import React from 'react'
import blog from '../../assets/ANmain.png'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom'

import notify1 from '../../assets/Notification/notify1.png'
import notify2 from '../../assets/Notification/notify2.png'
import notifyemail from '../../assets/Notification/notifyemail.png'
const Notification = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${blog})`,
        
      };
      const backgroundImage2 = {
        backgroundImage: `url(${notifyemail})`,
        
      };
  return (
    <div>

        
<div className=' bg-cover bg-center h-[316px] sm:h-[250px] flex text-[white] flex-col justify-center items-center' style={backgroundImageStyle}>
    <h1 className='text-[48px] sm:text-[30px] font-poppins font-bold'>Notification</h1>
    <div className='flex space-x-3 items-center text-[16px] sm:text-[13px]'>
    <Link to='/' className='font-poppins font-medium  '>Home</Link>
     <IoIosArrowForward/>
    <p className='font-light '> Notification</p>
    </div>
      </div>


<div className='px-[5%] sm:px-[2%] my-5'>

      <div className='flex bg-[#F5F5F5] p-[3%] h-[305px] lg:h-[240px] md:h-[220px] sm:h-[150px] items-center space-x-3 '>
        <div className='h-[100%] '>
            <img src={notify1} alt="" className='h-[100%] sm:w-[250px]' />
        </div>
        <div className='space-y-8 lg:space-y-6 md:space-y-4 sm:space-y-2'>
            <h4 className='font-Roboto font-bold text-[24px] md:text-[20px] sm:text-[11px] text-[#242424]'>Your order #123456789 has been confirmed</h4>
            <p className='text-[#808080] text-[18px] md:text-[15px] sm:text-[11px] font-Roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</p>
            <h1 className='text-right text-[#27AE60] font-bold text-[45px] md:text-[35px] sm:text-[20px]'>NEW</h1>
        </div>
      </div>


      <div className='flex  p-[3%] h-[305px] lg:h-[240px] md:h-[220px] sm:h-[150px] items-center space-x-3 '>
        <div className='h-[100%] '>
            <img src={notify2} alt="" className='h-[100%] sm:w-[250px]' />
        </div>
        <div className='space-y-8 lg:space-y-6 md:space-y-4 sm:space-y-2'>
            <h4 className='font-Roboto font-bold text-[24px] md:text-[20px] sm:text-[11px] text-[#242424]'>Your order #123456789 has been confirmed</h4>
            <p className='text-[#808080] text-[18px] md:text-[15px] sm:text-[11px] font-Roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</p>
            <h1 className='text-right text-[#27AE60] font-bold text-[45px] md:text-[35px] sm:text-[20px]'>NEW</h1>
        </div>
      </div>

      <div className=' bg-[#F5F5F5] p-[3%] h-[365px] lg:h-[280px] md:h-[250px] sm:h-[140px] items-center space-x-3 '>
       
        <div className='space-y-8 lg:space-y-6 md:space-y-4 sm:space-y-2'>
            <h4 className='font-Roboto font-bold text-[45px] lg:text-[35px] md:text-[27px] sm:text-[13px] text-[#242424]'>Your order #123456789 has been confirmed</h4>
            <p className='text-[#808080] text-[35px] lg:text-[27px] md:text-[21px] sm:text-[11px] font-Roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</p>
            <h1 className='text-right text-[#EB5757] font-bold text-[45px] md:text-[35px] sm:text-[20px]'>HOT!</h1>
        </div>
      </div>



      </div>


      <div className='bg-cover bg-center flex h-[490px] lg:h-[450px] md:h-[380px] sm:h-[150px] p-[80px] sm:p-[10px]' style={backgroundImage2}>

        <div className='flex-1'></div>
        <div className='flex-1 w-[598px] bg-[white] p-[2%] space-y-4'>
                <h1 className='text-[45px] lg:text-[40px] md:text-[30px] sm:text-[10px] font-bold font-Roboto'>Get more discount <br />
Off your order</h1>
                <p className='font-Roboto text-[22px] lg:text-[20px] md:text-[16px] sm:text-[10px]'>Join our mailing list</p>
                <input type="text" name="" id="" placeholder='Your email address' className='bg-[#F1F1F1] rounded-[8px] placeholder:text-[#23262F] sm:placeholder:text-[9px] p-[20px_20px] sm:p-[2px_5px] w-[70%] esm:w-[60%] h-[60px] md:h-[40px] sm:h-[30px]  mr-2'/>
                <button className='bg-[#FFDA18] rounded-[8px] w-[152px] lg:w-[110px] md:w-[70px] h-[60px] md:h-[40px] sm:w-[40px] sm:h-[30px] text-[18px] text-[white] font-bold md:text-[13px] sm:text-[7px] '>Shop Now</button>
        
        </div>
      </div>
    </div>
  )
}

export default Notification