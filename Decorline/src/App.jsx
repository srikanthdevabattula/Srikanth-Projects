

import { useEffect } from 'react';
import Routers from './Routes';
import { BrowserRouter, useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const App = () => {
  return (
<BrowserRouter>
<ScrollToTop />
			<Routers />
		</BrowserRouter>

	)
}

export default App
