import React from 'react'
import rating from '../../../assets/rating.png'
import table from '../../../assets/myreview.png'
const MyReviews = () => {
  return (
    <div className='mt-5 font-poppins'>

        <div className='h-[287px] sm:h-[200px] w-[80%] sm:w-[100%] px-[40px] md:px-[20px] md:py-[10px] py-[20px] space-y-3' style={{boxShadow: '0px 8px 40px 0px #8A959E33'
}}>
            <div className='flex items-center'>
                <img src={table} alt="img"  className='sm:w-[60px]'/>
                <div className='ml-4'>
                    <h1 className='text-[24px] md:text-[17px] sm:text-[12px] font-bold text-[#606060]'>Coffee Table</h1>
                    <p className='text-[#242424] text-[16px] md:text-[13px] sm:text-[9px] font-bold'>$ 50.00</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <img src={rating} alt="" className='sm:w-[60px] sm:h-[16px]'/>
                <p className='text-[#808080] sm:text-[10px]'>20/03/2020</p>
            </div>
            <p className='text-[#242424] text-[18px] md:text-[15px] sm:text-[10px] text-justify'>Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price</p>
        </div>
    </div>
  )
}

export default MyReviews