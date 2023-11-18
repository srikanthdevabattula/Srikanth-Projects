import React from 'react'
import whyus1 from '../../../assets/whyus1.png'
import whyus2 from '../../../assets/whyus2.png'
import whyus3 from '../../../assets/whyus3.png'
import whyus4 from '../../../assets/whyus4.png'
const Whyus = () => {
  return (
    <div className='my-8 md:my-4'>

   
    

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

export default Whyus