import React, { useState } from 'react';

const LetTalk = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the backend
    fetch('your_backend_api_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        console.log('Success:', data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center font-Roboto '>
      <h1 className='text-[54px] md:text-[40px] sm:text-[20px] my-16 sm:my-10'>Let's talk about your Dream home</h1>

      <form onSubmit={handleSubmit} className='flex flex-col space-y-14 sm:space-y-10 justify-center items-center'>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          placeholder='Name'
    className='w-[700px] md:w-[500px] sm:w-[250px] outline-none border-b-[2px] border-[#00000054] px-[1%]'
        />
        <input
          type="text"
          name="Phone"
          value={formData.Phone}
          onChange={handleChange}
          placeholder='Phone / Email'
          className='w-[700px] md:w-[500px] sm:w-[250px] outline-none border-b-[2px] border-[#00000054] px-[1%]'
        />

        <button type="submit" className='bg-[#FFDA18] text-[36px] md:text-[26px] sm:text-[20px] font-bold h-[81px] w-[273px] md:h-[60px] md:w-[180px] sm:h-[40px] sm:w-[140px]'>Submit</button>
      </form>
    </div>
  );
};

export default LetTalk;
