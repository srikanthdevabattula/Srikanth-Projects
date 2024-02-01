import { configureStore } from "@reduxjs/toolkit";
import {productsReducer}  from './reducer/productsReducer'



export const stores= configureStore({
    reducer:{
        productsReducer
    }
})