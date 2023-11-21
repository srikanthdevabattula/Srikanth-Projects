import React from 'react'
import myteam from '../../../assets/myteam.png'
const MyTeam = () => {
  return (
    <div className='h-[100%] flex flex-col justify-center items-center'>

        <img src={myteam} alt=""  className='sm:h-[80px]'/>
        <h4 className='text-[30px] md:text-[20px] font-bold font-Roboto mb-3'> No team Found</h4>
        <p className='px-[28%] text-center text-[14px] md:text-[12px] md:px-[10%] sm:text-[10px] text-[#8F8F8F] font-Roboto'>Our teams passion for designs,combined with their tireless efforts,guarantees, a result that exceeds your expectations and transform your space into a true masterpiece </p>
    </div>
  )
}

export default MyTeam