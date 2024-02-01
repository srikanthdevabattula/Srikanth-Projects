import React, { useState } from 'react'
import {GetQuotes} from '../../../Data/GetQuotes'
import axios from 'axios';

const GetQuote = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone,setPhone]=useState('');
  const [requestmsg,setRequestmsg]=useState('')

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleRequestMsgChange = (e) => {
    setRequestmsg(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_BACKEND_ENDPOINT', {
        name,
        email,
        phone,
        requestmsg,
      });

      if (response.status === 200) {
        console.log('Form submitted successfully!');
        closeModal();
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
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
                <div><button className='border-[9px] lg:border-[8px] md:border-[6px] sm:border-[4px] border-[#FFDA18] text-[60px] lg:text-[50px] md:text-[30px] sm:text-[17px] font-bold rounded-[45px] p-[10px_35px] lg:p-[8px_30px] md:p-[7px_28px] sm:p-[5px_14px]' onClick={openModal}>Get Quote</button></div>
            </div>
        </div>

     )}

{isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex bg-[#0f0f0f89] items-center justify-center md:items-start'>
          <div className=' w-[500px] md:w-[350px] sm:w-full md:h-[300px] h-[500px]'>
           
          <div className= ' w-full bg-[#0d0d0d] p-8 md:p-5 rounded-lg'>
            <h2 className='text-2xl font-bold mb-4 text-white'>Get Quote</h2>
            <form onSubmit={handleFormSubmit} className='space-y-6 md:space-y-3'>
              
                <input
                  type='text'
                  value={name}
                  onChange={handleNameChange}
                  className='border p-2 w-full rounded-[15px] placeholder:text-[black] placeholder:font-bold'
                  placeholder='Name'
                  required
                />
            
              
              
                <input
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  className='border p-2 w-full rounded-[15px]  placeholder:text-[black] placeholder:font-bold'
                  placeholder='Email'
                  required
                />
                 <input
                  type='text'
                  value={phone}
                  onChange={handlePhoneChange}
                  className='border p-2 w-full rounded-[15px] placeholder:text-[black] placeholder:font-bold'
                  placeholder='Phone'
                  required
                />

                <textarea
                  name='requestmsg'
                  value={requestmsg}
                  onChange={handleRequestMsgChange}
                  cols='30'
                  rows='4'
                  className='w-full rounded-[15px] p-2 placeholder:text-[black] placeholder:font-bold'
                  placeholder='Request'
                ></textarea>

             
              <button
                type='submit'
                className='bg-[#FFDA18] text-white rounded p-2 mr-5'
              >
                Get Quote
              </button>
              <button
              onClick={closeModal}
              className='mt-4 bg-[white] text-black rounded p-2 ml-4'
            >
              Cancel
            </button>
            </form>
         
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GetQuote