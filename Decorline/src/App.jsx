

import { useEffect } from 'react';
import Routers from './Routes';
import { BrowserRouter, useLocation } from "react-router-dom";
import { ShopContextProvider } from './Context/ShopContext';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const App = () => {
  return (
    <ShopContextProvider>
<BrowserRouter>
<ScrollToTop />
			<Routers />
		</BrowserRouter>
    </ShopContextProvider>

	)
}

export default App
