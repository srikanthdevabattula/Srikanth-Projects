import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
const Contactusform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Form submitted successfully!');
        // You may want to reset the form or redirect the user after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        // Handle error, e.g., show an error message
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className='font-poppins'>
      <div className='text-center px-[20%] py-[50px] '>
        <h1 className='font-semibold text-[36px] md:text-[30px]'>Get In Touch With Us</h1>
        <p className='text-[16px] md:text-[12px] text-[#9F9F9F]'>
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className='flex py-[50px]'>
        <div className='flex-1 flex flex-col items-center '>
          <div className='my-[10%] sm:mt-[40%]'>
            <h1 className='flex text-[24px] md:text-[20px] sm:text-[13px] font-medium'><FaLocationDot className='mr-2' />Address</h1>
            <p className='ml-6 text-[16px] md:text-[14px] sm:text-[10px]'> kolkata barasat 700198</p>
          </div>

          <div>
            <h1 className='flex text-[24px] md:text-[20px] sm:text-[13px] font-medium'><FaPhone className='mr-2' />Phone</h1>
            <p className='ml-6 text-[16px] md:text-[14px] sm:text-[10px]'>
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <form onSubmit={handleSubmit} className='space-y-6 sm:space-y-3'>
            <div className='space-y-3'>
              <p>Your name</p>
              <input
                type='text'
                placeholder='Abc'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='border-[1px] border-[#9F9F9F] rounded-[10px] w-[75%] sm:w-[90%] sm:h-[45px] h-[70px] md:h-[55px] pl-[3%] sm:placeholder:text-[10px]'
              />
            </div>

            <div className='space-y-3'>
              <p>Email address</p>
              <input
                type='email'
                placeholder='Abc@def.com'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='border-[1px] border-[#9F9F9F] rounded-[10px] w-[75%] h-[70px] sm:w-[90%] sm:h-[45px] md:h-[55px] pl-[3%] sm:placeholder:text-[10px]'
              />
            </div>

            <div className='space-y-3'>
              <p>Subject</p>
              <input
                type='text'
                placeholder='This is an optional'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='border-[1px] border-[#9F9F9F] rounded-[10px] w-[75%] h-[70px] sm:w-[90%] sm:h-[45px] md:h-[55px] pl-[3%] sm:placeholder:text-[10px]'
              />
            </div>

            <div className='space-y-3'>
              <p>Message</p>
              <textarea
                name='message'
                placeholder='Hi! i’d like to ask about'
                rows='3'
                value={formData.message}
                onChange={handleChange}
                className='border-[1px] border-[#9F9F9F] rounded-[10px] w-[75%] h-[120px] sm:w-[90%] sm:h-[75px] md:h-[90px] pl-[3%] pt-[15px] sm:placeholder:text-[10px]'
              ></textarea>
            </div>

            <button type='submit' className='bg-[#023020] text-[white] border-[1px] border-[#B88E2F] h-[55px] w-[237px] text-[16px] md:w-[180px] sm:w-[100px] sm:text-[12px] sm:h-[40px] rounded-[5px]'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactusform;
