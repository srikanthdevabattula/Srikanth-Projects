import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { store } from '../../App';
import start from '../../assets/start.png';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import logo from '../../assets/Logo.png';
import google from '../../assets/google.png';
import fb from '../../assets/fb.png';
import { RiToggleLine } from 'react-icons/ri';
import { BiSolidToggleRight } from 'react-icons/bi';
import './loader.css';

const Login = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${start})`,
  };

  // Use useContext to get the context value
  const [token, setToken] = useContext(store);

  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    Email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        'https://decorline-backend.onrender.com/api/v1/login',
        data
      );

      const authToken = response.data.token;
      setToken(authToken);

      console.log('Login successful:', response.data);

      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      setErrorMessage('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    // Save email and password to local storage here
    if (toggle) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    } else {
      localStorage.setItem('email', data.Email);
      localStorage.setItem('password', data.password);
    }
  };

  if (token) {
    return <Navigate to='/' />;
  }

  return (
    <div className='h-[100vh]'>
      {loading && <div className="loader-overlay"><div className="loader"></div></div>}
      <div className='flex items-center sm:flex-col'>
        <div className='flex-1 sm:order-2 h-[100vh] p-[5%_0%_5%_5%] sm:p-1 sm:w-[100%] '>
        <div className='h-[85vh] border-black border-t-[5px] border-l-[5px] border-b-[5px] sm:border-[5px] sm:p-1 flex flex-col items-center justify-between overflow-y-auto scrollbar-hide pt-[1%] pb-[8%]'>
        <div>
          <div className='flex justify-end text-[14px]'>
            <p>Don’t have an account?</p>
            <Link to='/register'>
              <h1 className='text-[#FFDA18]'>Sign up!</h1>
            </Link>
          </div>
          <h1 className='font-bold text-[40px] md:text-[30px] text-center font-Roboto mt-14 md:mt-6'>Welcome Back</h1>
          <h5 className='text-center text-[15px] text-[#7E7E7E] my-3'>Login into your account</h5>
          <div className='flex justify-center space-x-4 my-5'>
            <button className='border-[1px] border-[#20DC49] h-[44px] w-[126px] rounded-[5px] font-poppins font-medium flex items-center px-3'><img src={google} alt='' className='mr-2' /> Google</button>
            <button className='border-[1px] border-[#DEDEDE] h-[44px] w-[136px] rounded-[5px] font-poppins font-medium flex items-center px-3'><img src={fb} alt='' className='mr-2' />Facebook</button>
          </div>
          <form onSubmit={handleSubmit} className='space-y-5 flex flex-col items-center mb-6'>
            <div className='flex justify-center items-center space-x-2 '>
              <hr className='border-[1px] w-[100px]' /> <h5 className='sm:text-[10px]'>Or continue with</h5><hr className='border-[1px] w-[100px]' />
            </div>
            <div className='space-y-6 flex flex-col items-center'>
              <div className='border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                <input
                  type='email'
                  id='Email'
                  name='Email'
                  value={data.Email}
                  onChange={handleChange}
                  className='outline-none h-[50px] w-[100%] sm:h-[30px]'
                  placeholder='Enter Email'
                  required
                />
              </div>
              <div className='flex items-center border-[1px] rounded-[10px] h-[60px] px-2 w-[400px] md:w-[300px] sm:w-[250px] sm:h-[40px]'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={data.password}
                  onChange={handleChange}
                  className='outline-none w-[90%] sm:h-[30px]'
                  placeholder='Password'
                  required
                />
                {showPassword ? (
                  <IoEyeOffOutline onClick={handleTogglePassword} />
                ) : (
                  <IoEyeOutline onClick={handleTogglePassword} />
                )}
              </div>
              <div className='flex justify-between items-center md:space-x-10 space-x-28'>
                <h4 className='flex items-center font-poppins text-[12px] font-normal text-[#1A1A1A]'>
                {toggle ? <BiSolidToggleRight onClick={handleToggle} className='text-[35px]' /> : <RiToggleLine onClick={handleToggle} className='text-[35px] md:text-[25px] text-[#b9b7b7]'/>} Remember me</h4>
                <Link to='/forgotpassword'><h4 className='font-poppins text-[14px] md:text-[13px] text-[#D93F21] font-light hover:font-medium ease-in-out'>Recover Password</h4></Link>
              </div>
            </div>
            {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
            <button type='submit' className='hover:bg-[#FFDA18] w-[400px] h-[57px] md:w-[300px] md:h-[45px] sm:w-[250px]  border-[1px] border-[#5A5A5A] rounded-[10px] text-[18px] '>Login</button>
          </form>
        </div>
      </div>
        </div>
        <div className='flex-1 sm:flex-2 sm:w-[100%] bg-cover bg-center h-[100vh] p-[5%_5%_5%_0%] sm:p-1 ' style={backgroundImageStyle}>
        <div className=' h-[85vh] sm:h-[30vh] border-black border-t-[5px] border-r-[5px] border-b-[5px] sm:border-[5px] sm:p-1 flex justify-end'>
        <img src={logo} alt='' className='h-[60px]' />
        </div>
      </div>
    </div>
    
</div>


  );
};

export default Login;
