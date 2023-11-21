import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoMdHome } from "react-icons/io";
import { CgWorkAlt } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
export const Address = [
  {
    name: 'Jayeeta Sarkar',
    addressLine1: 'Kolkata kalbari',
    addressLine2: 'Opposite post office 10029',
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    mobileNumber: '1234567890',
  },
  {
    name: 'Ankan Gayen',
    addressLine1: 'Kolkata kalbari',
    addressLine2: 'Opposite post office 10029',
    city: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    mobileNumber: '9876543210',
  },
];

const ShippingAddress = () => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    mobileNumber: '',
  });

  const [Address, setAddress] = useState([
    {
      name: 'Jayeeta Sarkar',
      address: 'Kolkata kalbari, opposite post office 10029',
    },
    {
      name: 'Ankan Gayen',
      address: 'Kolkata kalbari, opposite post office 10029',
    },
  ]);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleRemove = (index) => {
    // Create a copy of the Address array
    const updatedAddress = [...Address];

    // Remove the address at the given index
    updatedAddress.splice(index, 1);

    // Update the Address state with the modified array
    setAddress(updatedAddress);
  };

  const handleAddNewAddress = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveNewAddress = () => {
    const updatedAddress = [...Address, newAddress];
    setAddress(updatedAddress);
    setNewAddress({
      name: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      mobileNumber: '',
    });
    setIsModalOpen(false);
  };

  return (
    <div className='mt-5 font-Roboto'>
      {Address.map((person, index) => (
        <div key={index}>
          <div className='h-[127px] w-[450px] sm:w-[200px] border-[0.5px] border-[#CAC7C7] my-8'>
            <div className='flex justify-between px-[3%] py-3 items-center text-[#242424] text-[18px] sm:text-[13px] font-bold'>
              <h1>{person.name}</h1>
              <CiEdit onClick={() => handleEdit(index)} />
            </div>
            <hr />
            <p className='text-[#808080] text-[14px] sm:text-[9px] px-[3%] py-3'>
             {person.address} ,{person.addressLine}, {person.addressLine2}, {person.city}, {person.state}, {person.country}
              <br />
              Mobile Number: {person.mobileNumber}
            </p>
          </div>
          <div className='space-x-5'>
            <button
              className='bg-[#F1EEEE] border-[0.5px] border-[#BABABA] p-[8px_15px] text-[18px] sm:text-[12px]'
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
            <button
              className='bg-[#F1EEEE] border-[0.5px] border-[#BABABA] p-[8px_15px] text-[18px] sm:text-[12px]'
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className='mt-4 w-[25%] md:w-[35%]'>
        <h1 className='text-center font-bold text-[20px] my-1 md:pr-6'>Or</h1>
        <button className='bg-[#4CD964] text-[15px] lg:text-[12px] md:text-[9px] sm:text-[6px] text-[white] p-[20px_50px] lg:p-[20px_30px] sm:p-[10px_10px]' onClick={handleAddNewAddress}>
          Add New Address
        </button>
      </div>

      {/* Modal */}
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
    </div>
  );
};

export default ShippingAddress;
