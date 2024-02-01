import { createContext, useEffect, useState } from 'react';
import Routers from './Routes';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ShopContextProvider } from './Context/ShopContext';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Provider } from 'react-redux';
import { stores } from './redux/store';
import PreLoader from './Components/PreLoader/PreLoader';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const App = () => {
  // console.log(Cookies.get('token'))
  // const [token, setToken] = useState(Cookies.get('token') || null);
  // const token = Cookies.get();
  const token = Cookies.get("token");
  // console.log(token);
  // console.log(Cookies.get('token'))

  // useEffect(() => {
  //   // Set the token in cookies when it changes
  //   if (token) {
  //     Cookies.set('token', token, { expires: 7 }); // Set expiry as needed 
  //   } else {
  //     Cookies.remove('token');
  //   }
  // }, [token]);

  return (

    <>
    <PreLoader />
    

    <Provider store={stores}>
   
      
        <BrowserRouter>
          <ScrollToTop />
          <Routers />
        </BrowserRouter>
      
    
    </Provider>
    </>
  );
};

export default App;
