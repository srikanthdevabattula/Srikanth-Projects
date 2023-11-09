import { Outlet } from "react-router-dom";


import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
	return (
		<main>
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;