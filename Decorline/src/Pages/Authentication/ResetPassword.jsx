// ForgotPasswordOtpVerification.jsx
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/Logo.png';
import start from '../../assets/start.png';
import verifiedimg from '../../assets/Successmark.png';
import { Link } from 'react-router-dom';
import './loader.css'; // Import your CSS file with loader styles

const ForgotPasswordOtpVerification = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${start})`,
  };
  const [formData, setFormData] = useState({
    otp: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');
  const [verified, setVerified] = useState(true);
  const [error, setError] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoader(true); // Start loader

      const response = await axios.patch('https://decorline-backend.onrender.com/api/v1/reset', {
        otp: formData.otp,
        password: formData.password,
        passwordConfirm: formData.confirmPassword,
      });
      setVerified(false);
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Error resetting password. Please try again.');
    } finally {
      setShowLoader(false); // Stop loader
    }
  };

  return (
    <div>
      <div className='h-[100vh] font-poppins'>
        <div className='flex items-center '>
          <div className='flex-1 h-[100vh] p-[5%_0%_5%_5%] sm:p-1 '>
            <div className='h-[85vh] border-black border-t-[5px] sm:border-[5px] border-l-[5px] border-b-[5px] flex flex-col items-center justify-between overflow-y-auto scrollbar-hide pt-[1%] pb-[8%]'>
              {verified ? (
                <div className='px-[30%] mt-[10%] lg:mt-[5%]'>
                  <h1 className='font-bold text-[36px] md:text-[25px] font-Roboto mt-14 md:mt-3 lg:mt-5 text-[#1E232C]'>Create new password</h1>
                  <h5 className=' text-[18px] md:text-[13px]  my-3'>Your new password must be unique from those previously used.</h5>
                  <form onSubmit={handleSubmit} className='space-y-5 flex flex-col '>
                    <div className='space-y-6'>
                      <div className='border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] border-[#35C2C1]'>
                        <input
                          type="text"
                          id="otp"
                          name="otp"
                          value={formData.otp}
                          onChange={handleChange}
                          className='outline-none h-[50px] w-[100%] '
                          placeholder='Enter OTP'
                          required
                        />
                      </div>
                      <div className='border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] bg-[#f7f8f9]'>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder='New Password'
                          className='outline-none h-[50px] w-[100%] bg-[#f7f8f9] '
                          required
                        />
                      </div>
                      <div className='border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] bg-[#f7f8f9]'>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder='Confirm Password'
                          className='outline-none h-[50px] w-[100%] bg-[#f7f8f9]'
                          required
                        />
                      </div>
                    </div>
                    {message && <p>{message}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type='submit' className='bg-[#FFDA18] hover:bg-[#ededed] hover:border-[1px] border-[black] w-[300px] h-[57px] md:h-[45px] md:w-[300px] sm:w-[250px]  rounded-[10px] text-[18px] font-poppins font-bold'>Reset password</button>
                  </form>
                </div>
              ) : (
                <div>
                  <div className='flex flex-col  items-center mt-[30%] md:mt-[10%] '>
                    <img src={verifiedimg} alt="" />
                    <h1 className='font-bold text-[36px] md:text-[25px] text-[#1E232C] mt-14 md:mt-10'>Password changed!</h1>
                    <p className='text-center text-[18px] md:text-[14px] text-[#8391A1]'>Your password has been <br /> changed successfully.</p>
                    <Link to='/login'><button className='bg-[#FFDA18] hover:text-[white] rounded-[8px] font-bold text-[18px] h-[56px] w-[330px] md:w-[250px] mt-14'>Back to Login</button></Link>
                  </div>
                </div>
              )}
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

export default ForgotPasswordOtpVerification;
