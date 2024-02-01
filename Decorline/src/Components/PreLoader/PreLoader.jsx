import React, { useEffect } from 'react'
import './preloader.css'
import logo from '../../assets/Logo.png'
import { preLoaderAnim } from '../animations';
const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
      }, []);
  return (
    <div className="preloader ">
    <div className="texts-container ">
      <img src={logo} alt="" />
    </div>
  </div>
  )
}

export default PreLoader