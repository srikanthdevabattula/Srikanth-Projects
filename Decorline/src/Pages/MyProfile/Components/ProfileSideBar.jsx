import React, { useContext } from 'react';
import { RiListOrdered } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import profile from '../../../assets/profile.png';
import { FaCoins } from 'react-icons/fa';
import { IoHeartCircleOutline, IoLogOutOutline } from 'react-icons/io5';
import { CiCreditCard1 } from 'react-icons/ci';
import { TbMessageStar } from 'react-icons/tb';
import { IoMdContacts } from 'react-icons/io';
import { FaRegBuilding } from 'react-icons/fa';
import { GoQuestion } from 'react-icons/go';
import { RiCustomerServiceLine } from 'react-icons/ri';

import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { actions, sidebarSelector } from '../../../redux/reducer/productsReducer';

const ProfileSideBar = ( ) => {
  // const token = Cookies.get("token");
  const sidebar = useSelector(sidebarSelector)
    console.log(sidebar)

  const dispatch=useDispatch()
 


  return (
    <div className='w-[25%] font-Roboto space-y-5 sm:space-y-2'>
      <div
        className='bg-[#023020] h-[135px] w-[313px] lg:h-[120px] lg:w-[280px] md:w-[200px] md:h-[100px] sm:w-[100px] sm:h-[50px] esm:w-[80px]  rounded-[15px] flex space-x-2 items-center px-3'
        style={{
          boxShadow: '4px 4px 10px 0px #00000040',
        }}
      >
        <img
          src={profile}
          alt=''
          className=' h-[78px] w-[78px] md:w-[50px] md:h-[50px] sm:h-[20px] sm:w-[20px]'
        />
        <div className='text-[#E0E0E0] space-y-2'>
          <h1 className='text-[24px] md:text-[17px] sm:text-[8px] esm:text-[5px]'>
            name
          </h1>
          <p className='text-[14px] md:text-[9px] sm:text-[4px] esm:text-[3px]'>
            email
          </p>
        </div>
      </div>

      <div
        className='border-[1px] rounded-[10px] border-[#CCCCCC] w-[313px] lg:w-[280px] md:w-[200px] sm:w-[100px] esm:w-[80px] p-[20px] sm:p-[2px] space-y-5 sm:space-y-2 font-Roboto text-[20px] md:text-[14px] sm:text-[8px] esm:text-[7px] text-[#000000]'
        style={{
          boxShadow: '4px 4px 10px 0px #00000040',
        }}
      >
        <h1
          onClick={() => {dispatch(actions.sideBar('My Orders'))}}
          className='flex items-center'
        >
          <RiListOrdered className='mr-2' />
          My Orders
        </h1>
        <h1
          onClick={() =>{dispatch(actions.sideBar('Shipping Address'))}}
          className='flex items-center'
        >
          <CiLocationOn className='mr-2' />
          Shipping Address
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('Payment Method'))}}
          className='flex items-center'
        >
          <FaCoins className='mr-2' />
          Payment Method
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('My Wishlist'))}}
          className='flex items-center'
        >
          <IoHeartCircleOutline className='mr-2' />
          My Wishlist
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('Get Estimate'))}}
          className='flex items-center'
        >
          <CiCreditCard1 className='mr-2' /> Get Estimate
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('My Reviews'))}}
          className='flex items-center'
        >
          <TbMessageStar className='mr-2' />
          My Reviews
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('My Team'))}}
          className='flex items-center'
        >
          <IoMdContacts className='mr-2' />
          My Team
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('My Property'))}}
          className='flex items-center'
        >
          <FaRegBuilding className='mr-2' />
          My Property
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('Terms & Condition'))}}
          className='flex items-center'
        >
          <GoQuestion className='mr-2' />
          Terms & Condition
        </h1>
        <h1
          onClick={() => {dispatch(actions.sideBar('Customer Support'))}}
          className='flex items-center'
        >
          <RiCustomerServiceLine className='mr-2' />
          Customer Support
        </h1>
      </div>
      <div>
        <button
          onClick={() => {
            Cookies.remove('token');
            window.location.href = "/"; // Redirect to the home page or login page after logout
        }}
          className='w-[313px] lg:w-[280px] md:w-[200px] sm:w-[100px] sm:h-[35px] esm:h-[25px] esm:w-[80px] md:h-[45px] h-[78px] flex items-center border-[1px] text-[20px] md:text-[14px] rounded-[10px] border-[#CCCCCC] px-6 sm:px-2  font-Roboto texxt-[20px] sm:text-[10px] esm:text-[7px]'
          style={{
            boxShadow: '4px 4px 10px 0px #00000040',
          }}
        >
          <IoLogOutOutline className='mr-2' />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileSideBar;
