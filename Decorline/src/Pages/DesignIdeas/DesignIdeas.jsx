import React from 'react'
import GetQuote from './Components/GetQuote'
import Steps from './Components/Steps'
import LetTalk from './Components/LetTalk'
import Refer from './Components/Refer'
import Hero from './Components/Hero'
import { motion } from 'framer-motion'
const DesignIdeas = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    // transition={{ duration: 0.3 }}
    exit={{x:window.innerWidth,transition: {duration:0.1}}}
    >

        <Hero/>
        <GetQuote/>
        <Steps/>
        <LetTalk/>
        <Refer/>
    </motion.div>
  )
}

export default DesignIdeas