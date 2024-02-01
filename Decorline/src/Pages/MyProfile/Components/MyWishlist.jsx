import React from 'react'
import { ProductsDetails } from '../../../Data/Products'
import { CiCircleRemove } from "react-icons/ci";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { actions, cartSelector, productSelector } from '../../../redux/reducer/productsReducer';
const MyWishlist = () => {

  const dispatch = useDispatch()
  const productsDetails= useSelector(productSelector)
  const cart=useSelector(cartSelector)
  // console.log(cart)
  
 
  return (
    <div>
{productsDetails.map((product,index)=>
<div key={index}>
    
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
        <CiCircleRemove  onClick={()=>dispatch(actions.toggleWishlist(product.id))}/>
        <div className='flex items-center'>
  <RiShoppingBag2Fill onClick={() => {
    dispatch(actions.cart(product.id))
    dispatch(actions.total())}} />
  {cart.find(item => item.id === product.id)?.quantity > 0 && (
    <span>({cart.find(item => item.id === product.id)?.quantity})</span>
  )}
</div>
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