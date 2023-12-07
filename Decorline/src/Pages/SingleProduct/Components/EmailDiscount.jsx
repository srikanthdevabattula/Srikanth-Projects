import React, { useState } from 'react';
import notifyemail from '../../../assets/Notification/notifyemail.png';

const EmailDiscount = () => {
  const backgroundImage2 = {
    backgroundImage: `url(${notifyemail})`,
  };

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmailToBackend = () => {
    // Check if the email is not empty
    if (!email.trim()) {
      alert('Please enter a valid email address.');
      return;
    }

    // Start loading state
    setLoading(true);

    // Replace the URL with the actual endpoint for sending emails
    fetch('https://your-backend-api.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Stop loading state
        setLoading(false);

        // Handle the response from the backend
        console.log(data); // Log the response for debugging

        // Optionally, you can show a success message or perform other actions
        alert('Email sent successfully!');
      })
      .catch((error) => {
        // Stop loading state
        setLoading(false);

        console.error('Error sending email:', error);

        // Handle the error, e.g., show an error message to the user
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className='bg-cover bg-center flex h-[490px] lg:h-[450px] md:h-[380px] sm:h-[150px] p-[80px] sm:p-[10px]' style={backgroundImage2}>
      <div className='flex-1'></div>
      <div className='flex-1 w-[598px] bg-[white] p-[2%] space-y-4'>
        <h1 className='text-[45px] lg:text-[40px] md:text-[30px] sm:text-[10px] font-bold font-Roboto'>
          Get more discount <br /> Off your order
        </h1>
        <p className='font-Roboto text-[22px] lg:text-[20px] md:text-[16px] sm:text-[10px]'>Join our mailing list</p>
        <input
          type='email'
          name=''
          id=''
          placeholder='Your email address'
          className='bg-[#F1F1F1] rounded-[8px] placeholder:text-[#23262F] sm:placeholder:text-[9px] p-[20px_20px] sm:p-[2px_5px] w-[70%] esm:w-[60%] h-[60px] md:h-[40px] sm:h-[30px]  mr-2'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`bg-[#FFDA18] rounded-[8px] w-[152px] lg:w-[110px] md:w-[70px] h-[60px] md:h-[40px] sm:w-[40px] sm:h-[30px] text-[18px] text-[white] font-bold md:text-[13px] sm:text-[7px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={sendEmailToBackend}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Shop Now'}
        </button>
      </div>
    </div>
  );
};

export default EmailDiscount;
