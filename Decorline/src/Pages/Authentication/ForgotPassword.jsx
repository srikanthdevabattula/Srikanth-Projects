// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import start from '../../assets/start.png';
import logo from '../../assets/Logo.png';
import './loader.css'; // Import your CSS file with loader styles

const ForgotPassword = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${start})`,
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoader(true); // Start loader

      const response = await axios.post('https://decorline-backend.onrender.com/api/v1/forget', { Email: email });

      // Assuming the response contains relevant information
      if (response.data.success) {
        alert('Password reset link or OTP sent to your email');
        navigate('/reset-otp-verification'); // Redirect to OTP verification page or password reset link page
      } else {
        alert('Email is not registered');
      }
    } catch (error) {
      console.error('Error:', error.response.data.message);
    } finally {
      setShowLoader(false); // Stop loader
    }
  };

  return (
    <div>
      <div className='h-[100vh] font-poppins'>
        <div className='flex items-center '>
          <div className='flex-1 sm:flex-2 sm:p-1 h-[100vh] p-[5%_0%_5%_5%] '>
            <div className='h-[85vh] border-black border-t-[5px] border-l-[5px] sm:border-[5px] border-b-[5px] flex flex-col items-center justify-between overflow-y-auto scrollbar-hide pt-[1%] pb-[8%]'>
              <div className='px-[30%] mt-[10%]'>
                <h1 className='font-bold text-[36px] md:text-[25px] font-Roboto mt-14 text-[#1E232C]'>Forgot Password?</h1>
                <h5 className=' text-[18px] md:text-[14px] my-3'>Don't worry! It occurs. Please enter the email address linked with your account.</h5>
                <form onSubmit={handleSubmit} className='space-y-5 flex flex-col '>
                  <div className='space-y-6 flex justify-center'>
                    <div className='border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] flex items-center '>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none h-[50px] w-[100%] ' placeholder='Enter Email' required />
                    </div>
                  </div>
                  <button type='submit' className='bg-[#FFDA18] hover:text-[white] w-[300px] sm:w-[200px] sm:h-[45px] h-[57px] rounded-[10px] text-[18px] font-poppins font-bold'>Send Code</button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex-1 sm:hidden bg-cover bg-center h-[100vh] p-[5%_5%_5%_0%] ' style={backgroundImageStyle}>
            <div className=' h-[85vh] border-black border-t-[5px] border-r-[5px] border-b-[5px] flex justify-end'>
              <img src={logo} alt='' className='h-[60px]' />
            </div>
          </div>
        </div>
      </div>
      {showLoader && <div className="loader-overlay"><div className="loader"></div></div>}
    </div>
  );
};

export default ForgotPassword;
