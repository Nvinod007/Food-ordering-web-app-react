import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componants/Header';
import Body from './componants/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './componants/About';
import Contact from './componants/Contact';
import Error from './componants/Error'
import RestaurantMenu from './componants/RestaurantMenu'
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
  return (
    <div className='app'>
      <Header />
      {/* Outlet component  */}
      <Outlet />

    </div>
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
    ]
  },

])

root.render(<RouterProvider router={appRouter} />)