import React, { useContext, useEffect, useState } from 'react'
import Intro from './Components/Intro'

import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';

const Home = () => {
  // const [token,setToken]=useContext(store);
//   const token = Cookies.get('token')

//   // const [data,setData]=useState(null)
// console.log("token", token)


  // if(!token){
  //   return<Navigate to='/login'/>
  // }

  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    // transition={{ duration: 0.3 }}
    exit={{x:window.innerWidth,transition: {duration:0.1}}}
    >
      
        <Intro/>
    </motion.div>
  )
}

export default Home