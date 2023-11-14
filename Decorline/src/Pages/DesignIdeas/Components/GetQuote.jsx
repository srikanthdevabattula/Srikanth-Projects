import React from 'react'
import {GetQuotes} from '../../../Data/GetQuotes'
const GetQuote = () => {
  return (
    <div>
        <p className='text-[23px] lg:text-[19px] md:text-[16px] sm:text-[12px] text-center px-[30%] lg:px-[25%] md:px-[20%] sm:px-[10%] my-10 sm:my-5'>If you are looking to transform your kitchen into modern,functional and aesthetically pleasing space,we would be deslighted to discuss your project further.</p>
   
     {GetQuotes.map((data,index)=>
        <div className='px-[3%] mb-14 sm:mb-8 space-y-3' key={index}>
            <img src={data.image} alt="" className='w-[100%]'/>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h1 className='text-[60px] lg:text-[50px] md:text-[38px] sm:text-[18px] underline underline-offset-8 font-Roboto font-bold'>{data.name}</h1>
                    <p className='text-[38px] lg:text-[32px] md:text-[28px] sm:text-[15px] text-[#A4A4A4] font-c'>{data.size}</p>
                </div>
                <div><button className='border-[9px] lg:border-[8px] md:border-[6px] sm:border-[4px] border-[#FFDA18] text-[60px] lg:text-[50px] md:text-[30px] sm:text-[17px] font-bold rounded-[45px] p-[10px_35px] lg:p-[8px_30px] md:p-[7px_28px] sm:p-[5px_14px]'>Get Quote</button></div>
            </div>
        </div>

     )}
    </div>
  )
}

export default GetQuote