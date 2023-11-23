import React, { createContext, useState } from 'react'
import { ProductsDetails } from '../Data/Products';



export const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let cart ={};
    for (let i=1;i<ProductsDetails.length +1;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItems,setCartItems]= useState(getDefaultCart());

    const getTotalCartAmount = ()=>{
        let totalAmount =0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo =ProductsDetails.find((product)=>product.id===Number(item));
                totalAmount += cartItems[item] * itemInfo.Price
            }
        }
        return totalAmount;

    }

    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }
    const updateCartItemCount = (newAmount, itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }
    const removeItem =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:0}))
    }



    const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount,removeItem}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}


