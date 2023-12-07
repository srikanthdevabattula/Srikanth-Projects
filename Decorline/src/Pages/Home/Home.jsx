import React, { useContext, useEffect, useState } from 'react'
import Intro from './Components/Intro'
import { store } from '../../App';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Home = () => {
  const [token,setToken]=useContext(store);
  const [data,setData]=useState(null)
console.log("token", token)


  if(!token){
    return<Navigate to='/login'/>
  }

  return (
    <div>
      
        <Intro/>
    </div>
  )
}

export default Home