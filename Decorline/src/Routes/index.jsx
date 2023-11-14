
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
					element={<ContactUs />}
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
				
				
			</Route>
		</Routes>
	);
};

export default Routers;