import React, { useContext } from 'react'
import { ShopContext } from '../../../Context/ShopContext';
import { TiArrowSortedUp } from "react-icons/ti"
import { TiArrowSortedDown } from "react-icons/ti"
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { actions, cartSelector } from '../../../redux/reducer/productsReducer';
const CartItem = (props) => {
  const dispatch =useDispatch()
  const cart=useSelector(cartSelector)
  // console.log(cart)
    const { id, Name, offerPrice, ProductImage,quantity } = props.data;
    

    const handleIncrement=(id)=>{
      dispatch(actions.increaseQuantity(id))
      dispatch(actions.total())
    }
    const handleDecrement=(id)=>{
      dispatch(actions.decreaseQuantity(id))
      dispatch(actions.total())
    }
    const handleDelete=(id)=>{
      dispatch(actions.deleteItem(id))
      dispatch(actions.total())
    }
  return (
    <div className='h-[119px] md:h-[90px] flex justify-between items-center px-[20px] md:px-[10px] rounded-[15px] my-5' style={{boxShadow:'0px 1px 4px 0px #00000040'
    }}>

        <img src={ProductImage} alt=""  className='h-[82px] w-[80px] md:h-[70px] md:w-[70px] rounded-[8px]'/>
        <h1 className='text-[#1E1E1E] text-[18px] lg:text-[16px] md:text-[12px] font-poppins font-medium'>{Name}</h1>
        

        <div className='countHandler flex items-center text-[#393939]'>
        <h1 className='font-semibold text-[22px] lg:text-[15px] '>{quantity}</h1>
        <div className='flex flex-col space-y-[-8px]'>
   
   
   <TiArrowSortedUp
    onClick={()=>handleIncrement(id)}
    />
   <TiArrowSortedDown
    onClick={()=>handleDecrement(id)} 
    />
    </div>

        </div>

        <p className='text-[#393939] text-[14px] lg:text-[13px] md:text-[10px] font-poppins font-medium'>Rs.{offerPrice}</p>
         
         <ImBin
         onClick={()=>handleDelete(id)} 
         className='md:text-[13px]' />
    </div>
  )
}

export default CartItem