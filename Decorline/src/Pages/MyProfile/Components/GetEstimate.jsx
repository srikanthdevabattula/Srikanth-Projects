import React, { useState } from 'react';
import contactus from '../../../assets/contactus.png'
const GetEstimate = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${contactus})`,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone,setPhone]=useState('')

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    // Add any additional logic or API calls as needed
    closeModal(); // Close the modal after form submission
  };

  return (
    <div className='font-Roboto mt-3'>
       <p className='w-[80%] text-[#727272] text-[18px] md:text-[15px] sm:text-[11px]'>Are you looking to update your home's interior? We can help! Our team of experienced interior designers can create a custom design that fits your needs and budget.
<br /> <br />
To get started, simply fill out our online estimate form. We'll need some basic information about your project, such as the size of your home, the style you're interested in, and your budget.
<br /> <br />
Once we have this information, we'll be able to provide you with a detailed estimate. This estimate will include the cost of materials, labor, and any other expenses associated with your project.
<br /> <br />
We understand that every project is different, so we're happy to work with you to create a customized estimate that fits your needs.</p>
<br /> <br className='md:hidden' />
<h5 className='text-[#727272] text-[18px] md:text-[15px] sm:text-[11px]'>Click here to get started!</h5>
<br /> <br  className='md:hidden'/> <br  className='md:hidden'/> <br className='sm:hidden'/>  <br className='sm:hidden'/>

      <div className='flex justify-center'>
        <button
          className='bg-[#023020] rounded-[15px] p-[20px] sm:p-[10px] text-[white] font-bold text-[30px] md:text-[20px] sm:text-[15px]'
          onClick={openModal}
        >
          Get Estimate
        </button>
      </div>

      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex bg-[#0f0f0f89] items-center justify-center'>
          <div className='flex w-[700px] md:w-[550px] h-[500px] md:h-[420px]'>
            <div className='w-[350px] md:w-[50%] bg-white bg-cover bg-center flex items-center justify-center px-[10%] sm:hidden' style={backgroundImageStyle}><h1 className='text-white font-poppins font-extrabold text-[50px] md:text-[30px] text-left'>Your estimation is a click away.</h1></div>
          <div className= ' w-[350px] md:w-[50%] sm:w-full sm:mx-3 bg-black p-8 md:p-4 rounded-lg'>
            <h2 className='text-2xl font-bold mb-4 text-white'>Contact Us</h2>
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
                  onChange={handleNameChange}
                  className='border p-2 w-full rounded-[15px] placeholder:text-[black] placeholder:font-bold'
                  placeholder='Phone'
                  required
                />

                <textarea name="message" id="" cols="30" rows="4" className='w-[100%] rounded-[15px] p-2 placeholder:text-[black] placeholder:font-bold' placeholder='Any message'></textarea>


             
              <button
                type='submit'
                className='bg-[#FFDA18] text-white rounded p-2 mr-5'
              >
                Submit
              </button>
              <button
              onClick={closeModal}
              className='mt-4 bg-[white] text-black rounded p-2 ml-4'
            >
              Close
            </button>
            </form>
         
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetEstimate;
