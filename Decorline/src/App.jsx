import { createContext, useEffect, useState } from 'react';
import Routers from './Routes';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ShopContextProvider } from './Context/ShopContext';
import Cookies from 'js-cookie';
import axios from 'axios';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(Cookies.get('token') || null);
  

  useEffect(() => {
    // Set the token in cookies when it changes
    if (token) {
      Cookies.set('token', token, { expires: 7 }); // Set expiry as needed
    } else {
      Cookies.remove('token');
    }
  }, [token]);

  return (
    <store.Provider value={[token, setToken]}>
      <ShopContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routers />
        </BrowserRouter>
      </ShopContextProvider>
    </store.Provider>
  );
};

export default App;
