
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



const Routers = () => {
	
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout/>}
			>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/AboutUs"
					element={<AboutUs />}
				/>
                <Route
					path="/ContactUs"
					element={<GetInTouchWithUs />}
				/>
                  <Route
					path="/Blog"
					element={<Blogs />}
				/>
                 <Route
					path="/Store"
					element={<Store />}
				/>
				<Route
				path='/howItWorks'
				element={<HowItWorks/>}
				/>
				<Route
				path="/CustomerReviews"
				element={<CustomerReviews/>}
				/>
				<Route
				path='/Designideas'
				element={<DesignIdeas/>}
				/>
				<Route
				path='/terms&condition'
				element={<TermsAndCondition/>}
				/>
	<Route
				path='/Notification'
				element={<Notification/>}
				/>

<Route
				path='/FAQ'
				element={<FAQ/>}
				/>
				<Route
				path='/products'
				element={<Products/>}
				/>
				<Route
				path='/SingleProduct/:idNo'
				element={<SingleProduct/>}
				/>
				<Route
				path='/myprofile'
				element={<MyProfile/>}
				/>
					<Route
				path='/MyCart'
				element={<MyCart/>}
				/>



				
				
			</Route>
		</Routes>
	);
};

export default Routers;