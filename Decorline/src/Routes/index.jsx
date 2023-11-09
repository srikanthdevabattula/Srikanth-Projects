
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import MainLayout from "../Layout/MainLayout";
import Blogs from "../Pages/Blogs/Blog";

import ContactUs from '../Pages/Contactus/ContactUs'



const Routers = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout></MainLayout>}
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
			</Route>
		</Routes>
	);
};

export default Routers;