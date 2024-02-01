import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Cookies from 'js-cookie';

const MainLayout = () => {
  
  const token = Cookies.get('token')
  
console.log(token)
  
  if (!token) {
    return <Navigate to="/start" />;
  }
 


  return (
    <main>
      <Navbar />
      <Outlet token={token} />
      <Footer />
    </main>
  );
};

export default MainLayout;
