import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { store } from '../App';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  const [token] = useContext(store);
console.log(token)
  // If there's no token, redirect to the login page
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
