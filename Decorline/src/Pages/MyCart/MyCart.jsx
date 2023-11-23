import React, { useContext, useState } from 'react'
import { ProductsDetails } from '../../Data/Products'
import { ShopContext } from '../../Context/ShopContext'
import CartItem from './Components/CartItem'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import ShippingAddress from './Components/ShippingAddress';
import Payment from './Components/Payment';
const MyCart = () => {
    const [right,setRight]=useState("address")
    const tax = 20;
    const { cartItems,getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    let itemsinCart=0;

    Object.values(cartItems).forEach((count) => {
        itemsinCart += count;
      });
  return (
    

    <div className='flex sm:flex-col sm:space-y-8 my-10 font-poppins'>
        <div className='left flex-1 border-r-[2px] border-[#DCDCDC]'>
        
     <Link to='/Products'>   <button className='flex items-center p-[11px_61px] text-[#1E1E1E] font-semibold font-poppins text-[30px] md:text-[20px]' style={{background: "linear-gradient(180deg, #FFDA18 24.44%, rgba(255, 218, 24, 0) 160%)"
}}><IoIosArrowBack />  Shipping Continue</button>

</Link>

<div className='pl-[15%] pr-[5%] mt-14 lg:pl-[5%] md:pl-[2%]'>

<hr />
<div className='pl-[20px] mt-8'>
        <div className='cartItems space-y-3 my-3'>

            <h1 className='text-[20px] font-medium'>Order Summary</h1>
            <h3 className='font-medium text-[18px]'>Shipping cart</h3>
            <p className='text-[18px] '>You have {itemsinCart} items in your cart</p>

        {ProductsDetails.map((product ,index)=>{
            if(cartItems[product.id]!==0){
               
                return <CartItem key={index} data={product}/>
            }


        })}

        </div>
{totalAmount>0?
        <div className='space-y-2 my-4'>
            <p className='font-medium text-[#718096] text-[16px] font-poppins'>Gift Card / Discount code</p>
            <div className='flex justify-between w-[75%] md:w-[100%]'>
                <input type="text" className='bg-[#E2E8F0] h-[59px] w-[65%] rounded-[5px]'/>
                <button className='border-[2px] border-[#3182CE] rounded-[10px] h-[60px] w-[125px]'>Apply</button>
            </div>
        </div>:null}


        {totalAmount>0?
        <div className='checkOut w-[75%] md:w-[100%] space-y-2 text-[18px] md:text-[15px] font-medium text-[#4A5568]'>
          
          <div className='flex justify-between'>
            <p>Sub Total </p>
            <h5 className='text-[#2D3748] text-[20px] md:text-[17px]'>Rs.{totalAmount}</h5>
            </div>
            <div className='flex justify-between'>
            <p>Tax</p>
            <p className='text-[#2D3748] text-[20px] md:text-[17px]'>Rs.{tax}</p>
            </div>
            <div className='flex justify-between'>
            <p>Shipping</p>
            <p className='text-[#38B2AC] font-medium text-[20px] md:text-[17px]'>Free</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-[#2D3748] text-[20px]'>Total</p>
                <p className='text-[#2D3748] text-[20px]'>Rs.{totalAmount+tax}</p>
            </div>

        </div>:<h1>your cart is empty</h1>}
       </div>
        </div>
        </div>
        <div className="right flex-1">
            {
                right=="address"&&<ShippingAddress setRight={setRight} />
            }
            {
                right=="payment"&&<Payment setRight={setRight}/>
            }
        </div>
    </div>
  )
}

export default MyCart