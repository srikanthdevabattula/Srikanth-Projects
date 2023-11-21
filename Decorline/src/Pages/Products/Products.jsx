import React, { useState } from 'react'
import Hero from './components/hero'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import notifyemail from '../../assets/Notification/notifyemail.png'

import Services from '../Store/Components/Services'

const Products = () => {
    const backgroundImage2 = {
        backgroundImage: `url(${notifyemail})`,
        
      };
    const [show,setShow]=useState(8)
  return (
    <div>
<Hero/>
<Filter show={show} setShow={setShow} />
     
<div className='h-[50px] md:h-[40px] sm:h-[30px] bg-[#D9D9D9]'></div>

<ProductCard show={show} />


<div className='bg-cover bg-center flex h-[490px] lg:h-[450px] md:h-[380px] sm:h-[150px] p-[80px] sm:p-[10px]' style={backgroundImage2}>

<div className='flex-1'></div>
<div className='flex-1 w-[598px] bg-[white] p-[2%] space-y-4'>
        <h1 className='text-[45px] lg:text-[40px] md:text-[30px] sm:text-[10px] font-bold font-Roboto'>Get more discount <br />
Off your order</h1>
        <p className='font-Roboto text-[22px] lg:text-[20px] md:text-[16px] sm:text-[10px]'>Join our mailing list</p>
        <input type="text" name="" id="" placeholder='Your email address' className='bg-[#F1F1F1] rounded-[8px] placeholder:text-[#23262F] sm:placeholder:text-[9px] p-[20px_20px] sm:p-[2px_5px] w-[70%] esm:w-[60%] h-[60px] md:h-[40px] sm:h-[30px]  mr-2'/>
        <button className='bg-[#FFDA18] rounded-[8px] w-[152px] lg:w-[110px] md:w-[70px] h-[60px] md:h-[40px] sm:w-[40px] sm:h-[30px] text-[18px] text-[white] font-bold md:text-[13px] sm:text-[7px] '>Shop Now</button>

</div>
</div>

<Services/>

    </div>
  )
}

export default Products