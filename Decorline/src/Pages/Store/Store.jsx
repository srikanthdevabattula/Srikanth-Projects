import React from 'react'
import Hero from './Components/Hero'
import WhyUs from './Components/WhyUs'
import BestSelling from './Components/BestSelling'
import NewInStore from './Components/NewInStore'
import DiscountSlides from './Components/DiscountSlides'
import Services from './Components/Services'
import { motion } from 'framer-motion'
const Store = () => {
  

  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    // transition={{ duration: 0.3 }}
    exit={{x:window.innerWidth,transition: {duration:0.1}}}
    >
        <Hero/>
        <WhyUs/>
        <BestSelling/>
        <NewInStore/>
        <DiscountSlides/>
        <Services/>
    </motion.div>
  )
}

export default Store