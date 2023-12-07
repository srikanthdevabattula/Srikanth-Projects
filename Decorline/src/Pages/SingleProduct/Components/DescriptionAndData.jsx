import React from 'react'

const DescriptionAndData = ({features}) => {
  return (
    <div className=' border-[#D9D9D9]  mt-[-20px] sm:mt-[30px] mb-8 border-t-[1px] px-[15%] md:px-[10%]'>

<div className='flex space-x-[132px] md:space-x-[90px] sm:space-x-[40px] esm:space-x-[40px]   font-Roboto text-[28px] md:text-[22px] sm:text-[14px] esm:text-[12px] my-8 sm:my-4 justify-center '>
    <button className=' font-bold '>Description</button>
    <button className='text-[#9F9F9F]'>Materials</button>
    <button className='text-[#9F9F9F]'>Reviews [5]</button>
</div>


<div className='text-[16px] md:text-[12px] sm:text-[10px] text-[#9F9F9F]'>
  <p>This pink one-seater sofa is the perfect addition to any room. The soft velvet fabric is inviting and comfortable, and the sleek design will complement any décor. The sofa is also very easy to care for, simply spot clean with a damp cloth.</p>
  <h1 className='font-bold'>Features:</h1>
  <ul className='ml-6'>
    {features.map((list,index)=>
    <li key={index} className='list-disc'>{list}</li>
    )}
  </ul>
</div>
    </div>
  )
}

export default DescriptionAndData