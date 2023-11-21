import React from 'react'
import property from '../../../assets/property.png'
const MyProperty = () => {
  return (
    <div className='h-[100%] flex flex-col justify-center items-center'>

        <img src={property} alt=""  className='sm:h-[80px]'/>
        <h4 className='text-[30px] md:text-[20px] sm:text-[14px] font-bold font-Roboto mb-3'> No property Found</h4>
        <p className='px-[38%] md:px-[10%] text-center text-[14px] md:text-[13px] sm:text-[10px] text-[#8F8F8F] font-Roboto'>Looks like you haven’t registered youe dream home yet.Hurry! </p>
    </div>
  
  )
}

export default MyProperty