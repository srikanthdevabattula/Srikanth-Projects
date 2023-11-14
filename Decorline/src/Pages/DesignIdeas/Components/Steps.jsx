import React from 'react'
import stepsbg from '../../../assets/GetQuote/stepsbg.png'
import stepsbg2 from '../../../assets/GetQuote/stepsbg2.png'
const Steps = () => {
    const backgroundImage1 = {
        backgroundImage: `url(${stepsbg})`,
        
      };
      const backgroundImage2 = {
        backgroundImage: `url(${stepsbg2})`,
        
      };
  return (
    <div className='w-[100%]  h-[834px] lg:h-[650px] md:h-[500px] sm:h-[350px] bg-cover bg-center font-Roboto  text-[#FFFFFF] mt-[100px] md:mt-[50px]' style={backgroundImage1}>
        <div className='w-[50%] sm:w-[65%] h-[100%] bg-cover px-[8.5%] py-[6%] sm:px-[4%] flex flex-col justify-between' style={backgroundImage2}>
          <div>
            <h4 className='text-[37px] lg:text-[27px] md:text-[20px] sm:text-[14px]'>Make your dream interior in</h4>
            <h3 className='text-[49px] lg:text-[38px] md:text-[28px] sm:text-[22px]'>3 easy steps</h3>
            </div>

<div>
            <h4 className='text-[37px] lg:text-[30px] md:text-[22px] sm:text-[15px] font-bold sm:font-semibold'>Explore</h4>
            <p className='text-[22px] lg:text-[17px] md:text-[12px] sm:text-[10px]'>Explore more than just modular design
ideas with our experts.</p>
</div>

<div>
<h4 className='text-[37px] lg:text-[30px] md:text-[22px] sm:text-[15px] font-bold sm:font-semibold'>Design</h4>
<p className='text-[22px] lg:text-[17px] md:text-[12px] sm:text-[10px]'>Complete the designs with painting, flooring
and other decor solutions</p>
</div>
<div>
<h4 className='text-[37px] lg:text-[30px] md:text-[22px] sm:text-[15px] font-bold sm:font-semibold'>Move-in</h4>
<p className='text-[22px] lg:text-[17px] md:text-[12px] sm:text-[10px]'>Move in with ease, with our hassle-free civil work 
and installation services.</p>
</div>
        </div>
       
    </div>
  )
}

export default Steps