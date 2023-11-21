import React from 'react'

const MyOrders = () => {
  return (
    <div>
        <div className='flex justify-center space-x-[150px] md:space-x-6 py-[40px] md:py-[20px] text-[24px] md:text-[15px] sm:text-[10px]'>
            <button className='font-bold text-[#242424] border-b-[3px] border-[#242424]'>Delivered</button>
            <button className='text-[#999999]'>Processing</button>
            <button className='text-[#999999]'>Cancelled</button>
        </div>

        <div className='border-[1px] border-[#CAC2C2] rounded-[8px] font-Roboto py-[20px] md:py-[10px] md:mx-[5%] mx-[15%]'>
            <div className='flex justify-between px-[20px] md:px-[10px]'>
                <h1 className='text-[#242424] text-[22px] md:text-[14px] sm:text-[8px] font-bold'>Order No238562312</h1>
                <p className='text-[16px] md:text-[13px] sm:text-[7px]'>20/03/2022</p>
            </div>
            <hr />
            <div className='flex justify-between p-[20px] md:px-[10px]'>
                <h1 className='font-semibold text-[#808080] text-[18px] md:text-[13px] sm:text-[9px]'>Quantity: <span className='text-[#242424] font-poppins font-bold text-[18px] md:text-[13px] sm:text-[9px]'>01</span></h1>
                <p className='font-semibold text-[#808080] text-[18px] md:text-[13px] sm:text-[9px]'>Total Amount: <span className='text-[#242424] font-poppins font-bold text-[18px] md:text-[13px] sm:text-[9px]'>$150</span> </p>
            </div>
            <div className='flex justify-between'>
                <button className='rounded-[4px] h-[36px] w-[164px] md:h-[25px] md:w-[130px] sm:h-[25px] sm:w-[80px] bg-[#023020] text-[white] text-[16px] md:text-[13px] font-bold'>Detail</button>
                <p className='text-[18px] md:text-[14px] sm:text-[11px] font-bold text-[#27AE60] mr-[20px]'>Delivered</p>
            </div>

        </div>
    </div>
  )
}

export default MyOrders