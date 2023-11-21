import React from 'react'
import { ProductsDetails } from '../../../Data/Products'
import { CiCircleRemove } from "react-icons/ci";
import { RiShoppingBag2Fill } from "react-icons/ri";
const MyWishlist = () => {
  return (
    <div>
{ProductsDetails.map((product,index)=>
<div>
    
    {product.wishlist?
    <div>
    <div className='flex h-[150px] md:h-[120px] sm:h-[80px] p-[20px] sm:px-[10px] w-[90%] sm:w-[100%] justify-between'>
        <div className='flex space-x-2'>
        <img src={product.ProductImage} alt=""  className='rounded-[10px]'/>
        <div className='font-bold text-[18px] md:text-[14px] sm:text-[8px]'>
            <h4 className='text-[#606060] '>{product.Name}</h4>
            <h3 className='text-[#303030]'>{product.offerPrice}</h3>
        </div>
        </div>
        <div className='flex flex-col justify-between py-4 md:py-2 sm:py-0'>
        <CiCircleRemove />
        <RiShoppingBag2Fill />

        </div>
       
        </div>
        <hr />

    </div>
    
    :null}
  
    </div>
)}


    </div>
  )
}

export default MyWishlist