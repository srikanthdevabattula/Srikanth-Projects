import React, { useState } from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { Address } from '../../../Data/Address';
import { IoMdHome } from "react-icons/io";
import { CgWorkAlt } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
const ShippingAddress = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAddress, setNewAddress] = useState({
      name: '',
      mobileNumber: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
    });
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    const handleSaveNewAddress = () => {
      // Logic to save the new address
      // ...
      setIsModalOpen(false); // Close the modal after saving
    };
  return (
    <div className='w-[100%] px-[5%] lg:px-[3%] md:px-0 sm:px-2'>

        <div className='px-[20%] lg:px-[10%] mb-14'>
            <div className='flex justify-between z-40'>
            <FaCircle className='text-[#909090]' />
            <FaRegCircleDot className='text-[#16315E]'/>
            <FaRegCircle className='text-[#C4C4C4]'/>
            </div>
            <div className='flex'>
           
            <hr className='relative top-[-9.5px] z-[-100] w-[100%] border-[1px] border-[##0000001F]'/>
          
            </div> <div className='flex justify-between md:text-[13px] esm:text-[10px]'>
                <h1>Shipping address</h1>
                <h1 className='ml-[-20px]'>Billing</h1>
                <h1>Confirmation</h1>

            </div>
        </div>

       <div>
        {Address.map((person)=>
        <>
            <div className='flex justify-between my-8 '>
                <div>
                    <input type="radio" name="address" id="" className='mt-3'/>
                </div>
                <div className='ml-[-100px] lg:ml-2 space-y-2'>
                    <div className='flex'>
                    <h1 className='text-[24px] lg:text-[20px] md:text-[16px] text-[#17183B]'>{person.Name}</h1>
                    <button className='border-[1px] border-[#3AA39F] text-[#3AA39F] text-[12px] md:text-[10px] font-semibold ml-8 p-[7px] rounded-[10px]'>{person.Type}</button>
                    </div>
                    <p className='text-[#17183B] text-[18px] lg:text-[16px] md:text-[14px]'>{person.Address}</p>
                    <p className='text-[#17183B] text-[18px] lg:text-[16px] md:text-[14px]'>Contact-{person.Phone}</p>
                </div> 
                <div className='space-x-6 md:space-x-3 flex ml-1'>
                    <button className='text-[#17183B]'>Edit</button>
                    <button className='text-[#E14B4B] p-[10px] border-l-[1px]'>Remove</button>
                </div>
            </div>
        </>
        )}

        <div>
        <p
          className='text-[16px] text-[#3AA39F] cursor-pointer'
          onClick={() => setIsModalOpen(true)}
        >
          + Add New Address
        </p>
        </div>

        {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-[100vh] bg-opacity-70 bg-gray-800 flex justify-end overflow-y-auto'>
          <div className='bg-[#DDE8EF]  p-6 sm:p-3 h-[800px] w-[40%] sm:w-[80%] rounded shadow-md font-poppins space-y-3 '>
            <h2 className='text-[40px] md:text-[25px] font-Roboto underline font-bold mb-3'>Add New Address</h2>
            <div className='mb-4'>
              <label className='block text-[18px] text-[#686565]'>Name</label>
              <input
                type='text'
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                className='w-full p-2 border-[0.5px] border-[#000000] rounded-[10px] h-[59px]'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-[18px]  text-[#686565]'>Mobile Number</label>
              <input
                type='text'
                value={newAddress.mobileNumber}
                onChange={(e) => setNewAddress({ ...newAddress, mobileNumber: e.target.value })}
                className='w-full p-2 border-[0.5px] border-[#000000] rounded-[10px] h-[50px]'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-[18px]   text-[#686565]'>Address Line 1</label>
              <input
                type='text'
                value={newAddress.addressLine1}
                onChange={(e) => setNewAddress({ ...newAddress, addressLine1: e.target.value })}
                className='w-full p-2 border-[0.5px] border-[#000000] rounded-[10px] h-[50px]'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-[18px]   text-[#686565]'>Address Line 2</label>
              <input
                type='text'
                value={newAddress.addressLine2}
                onChange={(e) => setNewAddress({ ...newAddress, addressLine2: e.target.value })}
                className='w-full p-2 border-[0.5px] border-[#000000] rounded-[10px] h-[50px]'
              />
            </div>
            <div className='mb-4'>
            <input
                type='text'
                value={newAddress.city} placeholder='City'
                onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                className='w-full p-2 border-[0.5px] border-[#000000] rounded-[10px] h-[50px]'
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                value={newAddress.state} placeholder='State'
                onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                className='w-full p-2 border-[0.5px] border-[#000000] rounded-[10px] h-[50px]'
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                value={newAddress.country} placeholder='Country'
                onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                className='w-full p-2 border-[0.5px] border-[#000000] rounded-[10px] h-[50px]'
              />
            </div>

            <div className='text-[#AAAAAA] text-[16px]'><h4>Type of address</h4>
            <div className='flex space-x-4 sm:space-x-1'>
                <button className='border-[1px] bg-[#FFFFFF] flex border-[#AAAAAA] rounded-[5px] items-center p-[3px]'><IoMdHome className='text-[#000000] mr-1' />Home</button>
                <button className='border-[1px] bg-[#FFFFFF] flex border-[#AAAAAA] rounded-[5px] items-center p-[3px]'><CgWorkAlt className='text-[#000000] mr-1'/>Work</button>
                <button className='border-[1px] bg-[#FFFFFF] flex border-[#AAAAAA] rounded-[5px] items-center p-[3px]'><GoLocation className='text-[#000000] mr-1'/>Others</button>
            </div>
            </div>
            <div className='flex text-[#AAAAAA] space-x-2 text-[16px]'> <input type="checkbox" name="" id="" className='' />
            <p> Make this my default address</p>
            </div>
           
           
            <div className='flex justify-start space-x-4 text[22px]'>
            <button
                className='ml-2 bg-[#FFFFFF] border-[1px] border-[#FFDA18] text-[#FFDA18] p-[5px_20px] rounded-[15px]'
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                className='bg-[#FFDA18] text-[white] p-[5px_20px] rounded-[15px]'
                onClick={handleSaveNewAddress}
              >
                Save
              </button>
             
            </div>
          </div>
        </div>
      )}

        <div className='text-center mt-14'>
            <h1 className='font-bold text-[30px] text-[#737272]'>Or</h1>
            <button className='bg-[#FFDA18] text-[white] text-[18px] font p-[20px_50px]' onClick={()=>props.setRight("payment")}>Proceed to Checkout</button>
        </div>

       </div>


       
    </div>
  )
}

export default ShippingAddress