import React from 'react'
import Hero from './Components/Hero'
import WhyUs from './Components/WhyUs'
import BestSelling from './Components/BestSelling'
import NewInStore from './Components/NewInStore'
import DiscountSlides from './Components/DiscountSlides'
import Services from './Components/Services'

const Store = () => {
  return (
    <div>
        <Hero/>
        <WhyUs/>
        <BestSelling/>
        <NewInStore/>
        <DiscountSlides/>
        <Services/>
    </div>
  )
}

export default Store