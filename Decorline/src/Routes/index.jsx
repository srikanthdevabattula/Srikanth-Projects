
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import MainLayout from "../Layout/MainLayout";
import Blogs from "../Pages/Blogs/Blog";

import ContactUs from '../Pages/Contactus/ContactUs'
import Store from "../Pages/Store/Store";
import HowItWorks from "../Pages/HowItWorks/HowItWorks";
import DesignIdeas from "../Pages/DesignIdeas/DesignIdeas";
import CustomerReviews from "../Pages/CustomerReviews/CustomerReviews";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import FAQ from "../Pages/FAQ/FAQ";
import Notification from "../Pages/Notification/Notification";
import Products from "../Pages/Products/Products";
import { useState } from "react";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import GetInTouchWithUs from "../Pages/GetInTouchWithUs/GetInTouchWithUs";
import MyProfile from "../Pages/MyProfile/MyProfile";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Authentication/Register";
import OTPVerification from "../Pages/Authentication/Otp";
import Login from "../Pages/Authentication/Login";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import ForgotPasswordOtpVerification from "../Pages/Authentication/ResetPassword";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import UserIntro from "../Pages/Authentication/NewUserIntro";
import AnimatedRoutes from "./AnimatedRoutes";



const Routers = () => {
	
	
	return (
// 		<Routes>
// 				<Route 
// 			path='/start'
// 			element={<UserIntro/>}
// 			/>
// 					<Route 
// 			path='/register'
// 			element={<Register/>}
// 			/>
// 			<Route
// 			 path="/otp-verification"
// 			  element={<OTPVerification />}
// 			   />
			
// 			<Route 
// 			path='/login'
// 			element={<Login/>}
// 			/>

// 			<Route 
// 			path='/forgotpassword'
// 			element={<ForgotPassword/>}
// 			/>
// 			<Route 
// 			path='/reset-otp-verification'
// 			element={<ForgotPasswordOtpVerification/>}
// 			/>
			

			
// 			<Route
// 				path="/"
// 				element={<MainLayout/>}
// 			>
				
		
// 			<Route
// 			path="/"
// 			element={<Home />}
// 		/>
// 				<Route
// 					path="/AboutUs"
// 					element={<AboutUs />}
// 				/>
//                 <Route
// 					path="/ContactUs"
// 					element={<ContactUs />}
// 				/>
//                   <Route
// 					path="/Blog"
// 					element={<Blogs />}
// 				/>
//                  <Route
// 					path="/Store"
// 					element={<Store />}
// 				/>
// 				<Route
// 				path='/howItWorks'
// 				element={<HowItWorks/>}
// 				/>
// 				<Route
// 				path="/CustomerReviews"
// 				element={<CustomerReviews/>}
// 				/>
// 				<Route
// 				path='/Designideas'
// 				element={<DesignIdeas/>}
// 				/>
// 				<Route
// 				path='/terms&condition'
// 				element={<TermsAndCondition/>}
// 				/>
// 	<Route
// 				path='/Notification'
// 				element={<Notification/>}
// 				/>

// <Route
// 				path='/FAQ'
// 				element={<FAQ/>}
// 				/>
// 				<Route
// 				path='/products'
// 				element={<Products/>}
// 				/>
// 				<Route
// 				path='/SingleProduct/:idNo'
// 				element={<SingleProduct/>}
// 				/>
// 				<Route
// 				path='/myprofile'
// 				element={<MyProfile/>}
// 				/>
// 					<Route
// 				path='/MyCart'
// 				element={<MyCart/>}
// 				/>



				
				
// 			</Route>
// 		</Routes>
<AnimatedRoutes />
	);
};

export default Routers;