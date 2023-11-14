import React from 'react'
import {BsTrophy,BsPatchCheck} from 'react-icons/bs'
import fd from '../../../assets/fd.png'
import support from '../../../assets/support.png'
import trophy from '../../../assets/trophy.png'
import guarantee from '../../../assets/guarantee.png'
const Services = () => {
  return (
    <div className='bg-[#FAF3EA] flex justify-between py-[70px] px-[2%] md:py-[40px] sm:py-[15px] sm:px-[1%]'>

<div className='flex items-center space-x-1'>
   <img src={trophy} alt="" className='md:h-[80%] sm:h-[40%]'/>
    <div>
        <h1 className='font-poppins font-semibold text-[#242424] text-[25px] lg:text-[20px] md:text-[15px] sm:text-[8px]'>High Quality</h1>
        <p className=' text-[#898989] text-[20px] font-medium lg:text-[14px] md:text-[10px] sm:text-[6px]'>crafted from top materials</p>
    </div>
    
</div>
<div className='flex items-center space-x-1'>
<img src={guarantee} alt="" className='md:h-[80%] sm:h-[40%]'/>
<div>
        <h1 className='font-poppins font-semibold text-[#242424] text-[25px] lg:text-[20px] md:text-[15px] sm:text-[8px]'>Warranty Protection</h1>
        <p className=' text-[#898989] text-[20px] font-medium lg:text-[14px] md:text-[10px] sm:text-[6px]'>Over 2 years</p>
    </div>
    
    
</div>
<div className='flex items-center space-x-1'>
<img src={fd} alt="" className='md:h-[80%] sm:h-[40%]'/>
<div>
        <h1 className='font-poppins font-semibold text-[#242424] text-[25px] lg:text-[20px] md:text-[15px] sm:text-[8px]'>Free Shipping</h1>
        <p className=' text-[#898989] text-[20px] font-medium lg:text-[14px] md:text-[10px] sm:text-[6px]'>Order over 150 $</p>
    </div>
    
    
</div>

<div className='flex items-center space-x-1'>
<img src={support} alt="" className='md:h-[80%] sm:h-[40%]'/>
<div>
        <h1 className='font-poppins font-semibold text-[#242424] text-[25px] lg:text-[20px] md:text-[15px] sm:text-[8px]'>24 / 7 Support</h1>
        <p className=' text-[#898989] text-[20px] font-medium lg:text-[14px] md:text-[10px] sm:text-[6px]'>Dedicated support</p>
    </div>
    
    
</div>

    </div>
  )
}

export default Services