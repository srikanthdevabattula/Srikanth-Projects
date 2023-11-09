import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blog';
import { useEffect } from 'react';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/Contactus/ContactUs';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const App = () => {
  return (
	<>
		<Router>
    <ScrollToTop />
	<Navbar/>
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/Blog" element={<Blogs/>} />
      <Route path="/Aboutus" element={<AboutUs/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
		</Routes>
    <Footer/>
	</Router>
	</>

	)
}

export default App
