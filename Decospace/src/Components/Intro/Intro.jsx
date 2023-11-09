import React from 'react'

const Intro = () => {
  return (
    <div>
    <div className="bg-intro bg-cover bg-center h-[805px] lg:h-[600px] md:h-[550px] sm:h-[400px] text-center pt-[7%] space-y-[2%]">
<h1 className='font-Roboto font-bold text-[white] text-[83px] lg:text-[60px] md:text-[50px] sm:text-[30px] px-[10%]'>Refining the tone of your space</h1>
<p className='text-[white] font-poppins text-[23px] lg:text-[19px] md:text-[15px] sm:text-[10px] leading-[34px] sm:leading-[15px] px-[20%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
<button className='bg-[#FFDA18] h-[65px] w-[206px] lg:h-[50px] lg:w-[170px] md:h-[45px] md:w-[150px] sm:h-[35px] sm:w-[120px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-bold font-poppins'>OUR PROJECT</button>
    </div>
    <div className='flex justify-between xl:justify-around my-5 px-3 relative mt-[-10%] sm:flex-col sm:justify-center sm:items-center sm:mt-[20px] sm:space-y-7'>
        <div className='rounded-[20px] font-poppins text-center bg-[#F5F7FA] h-[308px] w-[435px] lg:h-[260px] lg:w-[330px] md:h-[230px] md:w-[240px] p-[2%]'>
            <h1 className=' font-bold text-[32px] lg:text-[28px] md:text-[23px]'>HOME DESIGN CONSULTATION</h1>
            <p className='text-[15px] lg:text-[14px] md:text-[12px]'>An interior designer meets with you to discuss your needs and goals.They'll create a design plan that fits your budget and style.</p>
            <button className='text-[40px] md:text-[30px]'>⮕</button>

        </div>
        <div className='rounded-[20px] font-poppins text-center bg-[#F5F7FA] h-[308px] w-[435px] lg:h-[260px] lg:w-[330px] md:h-[230px] md:w-[240px] p-[2%]'>
            <h1 className=' font-bold text-[32px] lg:text-[28px] md:text-[23px]'>HOME DESIGN 3D 2D INTERIOR SERVICE</h1>
            <p className='text-[15px] lg:text-[14px] md:text-[12px]'>Home design 2D and 3D services can help you visualize your dream home before it is built. These services can provide you with a floor plan, 3D renderings.</p>
            <button className='text-[40px] md:text-[30px]'>⮕</button>

        </div>
        <div className='rounded-[20px] font-poppins text-center bg-[#F5F7FA] h-[308px] w-[435px] lg:h-[260px] lg:w-[330px] md:h-[230px] md:w-[240px] p-[2%]'>
            <h1 className=' font-bold text-[32px] lg:text-[28px] md:text-[23px]'>HOME DESIGN EXECUTION</h1>
            <p className='text-[15px] lg:text-[14px] md:text-[12px]'>Once the design is complete, we will help you execute it. we will work with contractors and vendors to get your home interior project completed on time and within budget.</p>
            <button className='text-[40px] md:text-[30px]'>⮕</button>

        </div>
    </div>
    </div>
  )
}

export default Intro