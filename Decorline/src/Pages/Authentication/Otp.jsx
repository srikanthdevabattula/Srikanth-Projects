// OTPVerification.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import start from '../../assets/start.png';
import logo from '../../assets/Logo.png';
import verifiedimg from '../../assets/Successmark.png';
import './loader.css'; // Import your CSS file with loader styles

const OTPVerification = ({ userData }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${start})`,
  };
  const [otp, setOTP] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setOTP(e.target.value);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    try {
      setShowLoader(true); // Start loader

      const response = await axios.post(
        'https://decorline-backend.onrender.com/verify/v1/api',
        { otp }
      );

      console.log('OTP verification response:', response.data);
      setIsVerified(true);

      if (response.data.status) {
        setIsVerified(true);
        await axios.post('https://decorline-backend.onrender.com/api/v1/register', userData);
        console.log('User registered successfully!');
        navigate('/login');
      } else {
        setShowModal(true);
        setErrorMessage('Wrong OTP. Please try again.');
      }
    } catch (error) {
      console.error('OTP verification failed:', error.response.data.message);
      setShowModal(true);
      setErrorMessage('Error verifying OTP. Please try again.');
    } finally {
      setShowLoader(false); // Stop loader
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsVerified(false);
    setErrorMessage('');
  };


  return (
  

<div className='flex sm:flex-col items-center '>
{showLoader && <div className="loader-overlay"><div className="loader"></div></div>}
<div className='flex-1 sm:flex-2 h-[100vh] p-[5%_0%_5%_5%] sm:p-1 sm:w-[100%]'>
  <div className='h-[85vh] border-black border-t-[5px] border-l-[5px] border-b-[5px] sm:border-[5px] flex flex-col items-center justify-between overflow-y-auto scrollbar-hide pt-[1%] pb-[8%]'>
 
 
 {isVerified ? <div>

<div className='flex flex-col  items-center mt-[30%] lg:mt-[15%] '>
  <img src={verifiedimg} alt="" />
  <h1 className='font-bold text-[36px] md:text-[25px] text-[#1E232C] mt-14 md:mt-8'>OTP Verified</h1>
  <p className='text-center text-[18px] md:text-[13px] text-[#8391A1]'>Your OTP has been <br /> Verified sucessfully.</p>
  <Link to='/login'><button className='bg-[#FFDA18] hover:text-[white] rounded-[8px] font-bold text-[18px] h-[56px] w-[330px] md:w-[200px] md:h-[45px] md:text-[15px] mt-14'>Back to Login</button></Link>
</div>


</div> : <div className='font-poppins mt-[30%] lg:mt-[15%] px-[20%]'>
      <form onSubmit={handleVerifyOTP} className='flex flex-col '>
        <h3 className='text-[36px] md:text-[25px] font-bold text-[#1E232C]'>OTP Verification</h3>
        <p className='text-[#838BA1] text-[18px] md:text-[13px]'>Enter the verification code we just sent on your email address.</p>
        <div className='border-[1.2px] border-[#35C2C1] rounded-[10px] h-[60px] px-2 w-[250px] mt-10'>
         
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            className='outline-none h-[50px] w-[100%] '
            required
          />
        </div>
        <button type="submit" className=' bg-[#FFDA18] rounded-[8px] h-[56px] w-[330px] md:w-[250px] mt-6 text-[18px] font-bold'>Verify</button>
      </form>

      {showModal && (
        <div className="modal">
          {isVerified ? (
            <div>
              <p>OTP Verified!</p>
            </div>
          ) : (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div> 
    }
  </div>
</div>
<div className='flex-1 sm:hidden bg-cover bg-center h-[100vh] p-[5%_5%_5%_0%] ' style={backgroundImageStyle}>
  <div className=' h-[85vh] border-black border-t-[5px] border-r-[5px] border-b-[5px] flex justify-end'>
    <img src={logo} alt='' className='h-[60px]' />
  </div>
</div>
</div>
  );
};

export default OTPVerification;
