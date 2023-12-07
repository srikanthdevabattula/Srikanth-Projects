// Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import start from '../../assets/start.png';
import logo from '../../assets/Logo.png';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import google from '../../assets/google.png';
import fb from '../../assets/fb.png';
import './loader.css'; // Import your CSS file with loader styles

const Register = ({ setUserData: parentSetUserData }) => {
  const [loading, setLoading] = useState(false);
  const [errmsg, setErrmsg] = useState('');
  const backgroundImageStyle = {
    backgroundImage: `url(${start})`,
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    Username: '',
    Email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Start loader

      const response = await axios.post(
        'https://decorline-backend.onrender.com/api/v1/register',
        data
      );

      console.log('Registration successful:', response.data);

      navigate('/otp-verification');
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      setErrmsg(error.response.data.message);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className='h-[100vh]'>
      {loading && <div className="loader-overlay"><div className="loader"></div></div>}
      <div className='flex sm:flex-col items-center '>
        <div className='flex-1 sm:flex-2 sm:w-[100%] sm:order-2 h-[100vh] p-[5%_0%_5%_5%] sm:p-1 '>
          <div className='h-[85vh] border-black border-t-[5px] border-l-[5px] border-b-[5px] flex flex-col items-center sm:border-[5px]  justify-between overflow-y-auto scrollbar-hide pt-[1%] pb-[8%]'>
            <div>
                <div className='flex justify-end font-poppins text-[14px] sm:text-[10px] lg:pr-4'>
                    <p>Already have an account?</p>
              <Link to='/login'>
                <h1 className='text-[#FFDA18] pl-2'>Login</h1>
              </Link>
              </div>
              <h1 className='font-bold text-[40px] lg:text-[30px] sm:text-[20px] md:text-[25px] text-center font-Roboto my-3'>Get Started With DecoSpace</h1>
              <h5 className='text-center text-[15px] sm:text-[12px] text-[#7E7E7E] my-3'>Geeting started is easy</h5>
              <div className='flex justify-center space-x-4 my-5'>
                <button className='border-[1px] border-[#20DC49] h-[44px] w-[126px] rounded-[5px] font-poppins font-medium flex items-center px-3'><img src={google} alt="" className='mr-2' /> Google</button>
                <button className='border-[1px] border-[#DEDEDE] h-[44px] w-[136px] rounded-[5px] font-poppins font-medium flex items-center px-3'><img src={fb} alt="" className='mr-2'/>Facebook</button>
              </div>
              <form onSubmit={handleSubmit} className='space-y-6 flex flex-col items-center'>
                <div className='flex justify-center items-center space-x-2  sm:text-[10px] text-[14px]'><hr className='border-[1px] w-[100px]'/> <h5>Or continue with</h5><hr className='border-[1px] w-[100px]'/></div>
                <div className='border-[1px] flex items-center rounded-[10px] h-[60px] px-2 w-[400px] sm:w-[230px] sm:h-[50px] md:w-[300px] md:h-[50px]'>
                  <input
                    type='text'
                    id='Username'
                    name='Username'
                    value={data.Username}
                    onChange={handleChange}
                    className='outline-none  w-[100%] '
                    placeholder='Full Name'
                    required
                  />
                </div>
                <div  className='border-[1px] flex items-center rounded-[10px] h-[60px] px-2 w-[400px] sm:w-[230px] sm:h-[50px] md:w-[300px] md:h-[50px]'>
                  <input
                    type='email'
                    id='Email'
                    name='Email'
                    value={data.Email}
                    onChange={handleChange}
                    className='outline-none  w-[100%] '
                    placeholder='Enter Email'
                    required
                  />
                </div>
                <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] sm:w-[230px] sm:h-[50px] md:w-[300px] md:h-[50px]'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                    className='outline-none w-[90%]'
                    placeholder='Password'
                    required
                  />
                  {showPassword ? (
                    <IoEyeOffOutline onClick={handleTogglePassword} />
                  ) : (
                    <IoEyeOutline onClick={handleTogglePassword} />
                  )}
                </div>
                <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] sm:w-[230px] sm:h-[50px] md:w-[300px] md:h-[50px]'>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id='confirmPassword'
                    name='confirmPassword'
                    value={data.confirmPassword}
                    onChange={handleChange}
                    className='outline-none w-[90%]'
                    placeholder='Confirm Password'
                    required
                  />
                  {showConfirmPassword ? (
                    <IoEyeOffOutline onClick={handleToggleConfirmPassword} />
                  ) : (
                    <IoEyeOutline onClick={handleToggleConfirmPassword} />
                  )}
                </div>
        {errmsg?  <p className='text-[red] font-bold font-poppins md:text-[12px] text-center'> {errmsg}</p> : null}
                <button type='submit' className='bg-[#FFDA18] w-[400px] h-[57px] sm:w-[230px] md:w-[300px] sm:h-[50px]  md:h-[50px] rounded-[10px] text-[18px] font-bold hover:shadow-xl'>Create Account</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex-1 sm:flex-2 sm:w-[100%]  bg-cover bg-center h-[100vh] p-[5%_5%_5%_0%] sm:p-1 ' style={backgroundImageStyle}>
          <div className=' h-[85vh] sm:h-[30vh] border-black border-t-[5px] border-r-[5px] border-b-[5px] sm:border-[5px] flex justify-end'>
            <img src={logo} alt='' className='h-[60px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
