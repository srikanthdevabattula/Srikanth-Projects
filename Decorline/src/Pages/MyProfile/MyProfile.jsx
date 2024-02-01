import React, { useContext, useEffect, useState } from 'react';
import Hero from './Components/hero';

import MyOrders from './Components/MyOrders';
import ShippingAddress from './Components/ShippingAddress';
import PaymentMethod from './Components/PaymentMethod';
import ProfileSideBar from './Components/ProfileSideBar';
import MyWishlist from './Components/MyWishlist';
import GetEstimate from './Components/GetEstimate';
import MyReviews from './Components/MyReviews';
import MyTeam from './Components/MyTeam';
import MyProperty from './Components/MyProperty';
import CustomerSupport from './Components/CustomerSupport';
import TermsAndCondition from './Components/TermsAndCondition';
import notifyemail from '../../assets/Notification/notifyemail.png'
import { IoIosArrowForward } from "react-icons/io";
import whyus1 from '../../assets/whyus1.png'
import whyus2 from '../../assets/whyus2.png'
import whyus3 from '../../assets/whyus3.png'
import whyus4 from '../../assets/whyus4.png'
import { useSelector } from 'react-redux';
import { sidebarSelector } from '../../redux/reducer/productsReducer';
import { motion } from 'framer-motion'
const MyProfile = () => {
  

    const backgroundImage2 = {
        backgroundImage: `url(${notifyemail})`,
        
      };
    const RightComponent=useSelector(sidebarSelector)
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    // transition={{ duration: 0.3 }}
    exit={{x:window.innerWidth,transition: {duration:0.1}}}
    >
      <Hero />

      <div className='flex p-[3%] justify-between'>
       
        <ProfileSideBar />
          
            <div className='w-[70%]  border-[1px] p-[2%]  border-[#727272] rounded-[15px]' style={{boxShadow: '4px 4px 10px 0px #00000040'
}}>


                <div className='flex items-center text-[24px] md:text-[14px] sm:text-[10px] pb-[2%] space-x-2'><h1 className=' font-Roboto'>My Profile</h1><IoIosArrowForward  className='text-[40px] md:text-[20px]'/><h1 className='underline text-[#B0B0B0]'>{RightComponent}</h1></div>
               <div className='px-[0%]'><hr className='border-[2px] border-[#A1A1A15C]'/></div> 
                {
                    RightComponent==='My Orders'&&<MyOrders/>
                }
                {
                    RightComponent==='Shipping Address'&&<ShippingAddress/>
                }
                  {
                    RightComponent==='Payment Method'&&<PaymentMethod/>
                }
                 {
                    RightComponent==='My Wishlist'&&<MyWishlist/>
                }
                 {
                    RightComponent==='Get Estimate'&&<GetEstimate/>
                }
                 {
                    RightComponent==='My Reviews'&&<MyReviews/>
                }
                 {
                    RightComponent==='My Team'&&<MyTeam/>
                }
                 {
                    RightComponent==='My Property'&&<MyProperty/>
                }
                {
                    RightComponent==='Terms & Condition'&&<TermsAndCondition/>
                 }
                 {
                    RightComponent==='Customer Support'&&<CustomerSupport/>
                 }

            
             
            </div>

        
         
      </div>
      {RightComponent=='Get Estimate'?null:<div className='flex justify-center space-x-[50px] md:space-x-[20px] text-[white] font-Roboto font-bold text-[30px] md:text-[10px] pb-10 pt-2'><button className='bg-[#023020] rounded-[15px] p-[20px]'>Book Consulation</button> <button className='bg-[#023020] rounded-[15px] p-[20px]'>Get Estimate</button></div>}

      <div className='flex space-x-6 sm:space-x-3 esm:space-x-1 px-[3%] my-8'>
        <div className='flex flex-col items-center  space-y-2'>
            <img src={whyus4} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[23px] md:text-[17px] sm:text-[8px]'>Creative Expertise</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[18px] lg:text-[14px] md:text-[9px] sm:text-[6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='flex flex-col items-center  space-y-2'>
            <img src={whyus3} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[23px] md:text-[17px] sm:text-[8px]'>Budget Friendly</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[18px] lg:text-[14px] md:text-[9px] sm:text-[6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <img src={whyus2} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[23px] md:text-[17px] sm:text-[8px]'>Creative Expertise</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[18px] lg:text-[14px] md:text-[9px] sm:text-[6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='flex flex-col items-center space-y-2'>
            <img src={whyus1} alt="" />
            <h4 className='text-[#1E1D4C] font-bold text-[35px] lg:text-[23px] md:text-[17px] sm:text-[8px]'>Best Quality</h4>
            <p className='text-[#5E6282] px-[10%] text-center text-[18px] lg:text-[14px] md:text-[9px] sm:text-[6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

      </div>


      <div className='bg-cover bg-center flex h-[490px]  lg:h-[450px] md:h-[380px] sm:h-[150px] p-[80px] sm:p-[10px]' style={backgroundImage2}>

<div className='flex-1'></div>
<div className='flex-1 w-[598px] bg-[white] p-[2%] space-y-4'>
        <h1 className='text-[45px] lg:text-[40px] md:text-[30px] sm:text-[10px] font-bold font-Roboto'>Get more discount <br />
Off your order</h1>
        <p className='font-Roboto text-[22px] lg:text-[20px] md:text-[16px] sm:text-[10px]'>Join our mailing list</p>
        <input type="text" name="" id="" placeholder='Your email address' className='bg-[#F1F1F1] rounded-[8px] placeholder:text-[#23262F] sm:placeholder:text-[9px] p-[20px_20px] sm:p-[2px_5px] w-[70%] esm:w-[60%] h-[60px] md:h-[40px] sm:h-[30px]  mr-2'/>
        <button className='bg-[#FFDA18] rounded-[8px] w-[152px] lg:w-[110px] md:w-[70px] h-[60px] md:h-[40px] sm:w-[40px] sm:h-[30px] text-[18px] text-[white] font-bold md:text-[13px] sm:text-[7px] '>Shop Now</button>

</div>
</div>
    </motion.div>
  );
};

export default MyProfile;
