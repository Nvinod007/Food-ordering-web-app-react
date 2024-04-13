import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componants/Header';
import Body from './componants/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './componants/About';
import Contact from './componants/Contact';
import Error from './componants/Error'
import RestaurantMenu from './componants/RestaurantMenu'
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './redux/appstore';
import Cart from './componants/Cart';
// import Grocery from './componants/Grocery'

const root = ReactDOM.createRoot(document.getElementById('root'))

/**
 * import Grocery from './componants/Grocery'
 * const Grocery = lazy(() => import('./componants/Grocery')) 
 * ? abouve two line will call the component 
 * ? but 1st line will bundle the code im main bundle file
 * ? 2nd line will create a bundle file when ever user calls the grocery component
 */
const Grocery = lazy(() => import('./componants/Grocery'))

const AppComponant = () => {

  const [userName, setUserName] = useState('');
  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "vinod kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className='app'>
        <Header />
        {/* Outlet component  */}
        <Outlet />
      </div >
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponant />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: <Suspense
          fallback={<h3>this will be presented to user while
            grocery component is being ready</h3>}>
          <Grocery />
        </Suspense>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ]
  },

])

root.render(<RouterProvider router={appRouter} />)