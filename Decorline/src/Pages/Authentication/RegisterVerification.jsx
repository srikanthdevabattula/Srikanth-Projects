// CommonParentComponent.jsx
import React, { useState } from 'react';
import Register from './Register';
import OTPVerification from './Otp';

const CommonParentComponent = () => {
  const [userData, setUserData] = useState({
    Username: '',
    Email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <div>
      <Register setUserData={setUserData} />
      <OTPVerification userData={userData} />
    </div>
  );
};

export default CommonParentComponent;
