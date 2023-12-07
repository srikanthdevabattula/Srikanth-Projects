import React, { useState } from 'react'
import { PRODUCTS } from '../../../Data/BestSellingProduct';
import Cards from './Cards';
import { Link } from 'react-router-dom';
const BestSelling = () => {

    const [category,setCategory] = useState("Chair");

    const buttons =['Chair','Beds','Sofa','Lamp']

  return (
    <div className='bg-[#F7F7F7] py-5 '>
        <h1 className='font-bold text-[48px] lg:text-[40px] md:text-[30px] text-center '>Best Selling Product</h1>
        <div className='flex justify-center my-5'>
<div className='bg-[#EEEEEE] h-[57px] w-[348px] md:w-[250px] md:h-[50px] sm:w-[200px] sm:h-[40px] rounded-[44px] flex justify-between px-4 sm:px-2  items-center'>
        {buttons.map((item )=><button key={item} onClick={() => setCategory(item)} className={`text-[#1E1E1E] rounded-[32px]  text-[19px] md:text-[15px] sm:text-[12px] w-[84px]  md:w-[64px] h-[45px] sm:h-[35px] `} style={{ 
  backgroundColor: category === item ? "#FFFFFF" : "#EEEEEE",
}}>{item}</button>)}
        </div>
        </div>

        <div className='px-[3%] flex justify-center space-x-6 lg:space-x-5 sm:space-x-4 flex-wrap '>
        
        {category=="Chair" ? PRODUCTS.map((product,index)=>
            <React.Fragment key={index}>
            {product.category.includes(category) ?
            <Cards data={product} /> : null}
            </React.Fragment>
            )
: <h1 className=' text-[40px] my-10'>Coming Soon....</h1>}

        </div>
      <div className='flex justify-center'>
        <Link to='/products'>
        <button className='bg-[#FFDA18] hover:bg-slate-400 rounded-[15px] p-[10px_20px] text-[23px] sm:text-[16px] font-bold font-Roboto'>See all →</button>
      </Link>
      </div>
<div>
   

</div>
    </div>
  )
}

export default BestSelling