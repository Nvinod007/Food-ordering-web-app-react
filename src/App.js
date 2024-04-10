import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componants/Header';
import Body from './componants/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './componants/About';
import Contact from './componants/Contact';
import Error from './componants/Error'
import RestaurantMenu from './componants/RestaurantMenu'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Title = () => {
  return <h1>I am title</h1>
}

// {/* if path = '/ */ }
// <Body />
// {/* if path = '/about */ }
// <About />
// {/* if path = '/contact */ }
// <Contact />
const AppComponant = () => {
  return (
    <div className='app'>
      <Header />
      {/* Outlet component  */}
      <Outlet/>

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
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },
    ]
  },

])

root.render(<RouterProvider router={appRouter}/>)