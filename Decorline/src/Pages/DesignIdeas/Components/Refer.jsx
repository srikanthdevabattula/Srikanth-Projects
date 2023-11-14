import React from 'react'
import refer1 from '../../../assets/GetQuote/refer1.png'
import refer2 from '../../../assets/GetQuote/refer2.png'
import refer3 from '../../../assets/GetQuote/refer3.png'
const Refer = () => {
  return (
    <div className='bg-[#857F7FE8] flex space-x-3 py-1 items-center mt-16 sm:mt-10 w-[100%]'>

<img src={refer1} alt="" className='w-[20%]'/>
<div className='space-y-3 sm:space-y-1 py-3 w-[35%]'>
    <button className='bg-[#FFDA18] rounded-[15px] p-[19px_38px] lg:p-[10px_25px] md:p-[8px_20px] sm:p-[6px] text-[46px] lg:text-[30px] md:text-[23px] sm:text-[10px] font-bold '>Refer Your Friend</button>
    <p className='text-[white] italic text-[30px] lg:text-[23px] md:text-[15px] sm:text-[6px]'>Help a friend get closer to their dream home and Get Rewarded! </p>
    <h3 className='text-[46px] lg:text-[35px] md:text-[27px] sm:text-[11px] font-bold text-[white] '>Earn upto 10,000!</h3>
</div>
<img src={refer2} alt="" className='w-[35%]'/>
<img src={refer3} alt="" className='w-[10%]'/>

    </div>
  )
}

export default Refer