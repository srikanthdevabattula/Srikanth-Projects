import { createSlice } from "@reduxjs/toolkit";
import { ProductsDetails } from "../../Data/Products";



const initialState={
    products: ProductsDetails,
    cartItems:[],
    totalAmount:0,
    sideBar:'My Orders'
}


const productsSlice= createSlice({
    name:"products",
    initialState,
    reducers:{
        toggleWishlist:(state,action)=>{
            state.products.map((product,i)=>{
                if(product.id===action.payload){
                    product.wishlist= !product.wishlist
                }
                return product;
            })
        },
        cart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload);
      
            if (existingItem) {
              // If the product is already in the cart, increase its quantity
              existingItem.quantity += 1;
            } else {
              // If the product is not in the cart, add it with quantity 1
              const productToAdd = state.products.find(product => product.id === action.payload);
              state.cartItems.push({ ...productToAdd, quantity: 1 });
            }
          },
         

          total: (state, action) => {
            state.totalAmount = state.cartItems.reduce((total, item) => {
              return total + item.offerPrice * item.quantity;
            }, 0);
          },
       
        increaseQuantity: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload);
          
            if (existingItem) {
              // If the item is already in the cart, increase its quantity
              existingItem.quantity += 1;
            } else {
              // If the item is not in the cart, add it with quantity 1
              const productToAdd = state.products.find(product => product.id === action.payload);
              state.cartItems.push({ ...productToAdd, quantity: 1 });
            }
          },
          decreaseQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
              if (item.id === action.payload) {
                // Decrease quantity
                item.quantity -= 1;
      
                // Remove the item from cart if the quantity becomes 0
                if (item.quantity <= 0) {
                  return null; // Filtering out the item
                }
              }
              return item;
            }).filter(Boolean); // Remove null values from the array
          },
          deleteItem:(state,action)=>{
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                  // Decrease quantity
                  item.quantity = 0;
        
                  // Remove the item from cart if the quantity becomes 0
                  if (item.quantity <= 0) {
                    return null; // Filtering out the item
                  }
                }
                return item;
              }).filter(Boolean);

          },
          sideBar: (state, action) => {
            return { ...state, sideBar: action.payload };
          }
        },
      });

export const productsReducer=productsSlice.reducer

export const actions = productsSlice.actions

export const productSelector=(state)=> state.productsReducer.products

export const cartSelector=(state)=>state.productsReducer.cartItems

export const totalSelector=(state)=>state.productsReducer.totalAmount

// export const increaseSelector=(state)=> state.productsReducer.increaseQuantity

// export const decreaseQuantity=(state)=> state.productsReducer.decreaseQuantity

export const sidebarSelector=(state)=> state.productsReducer.sideBar

// Additional selector to calculate the total amount
// export const totalAmountSelector = state => {
//     return state.productsReducer.cartItems.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);
//   };