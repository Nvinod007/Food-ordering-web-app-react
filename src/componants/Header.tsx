import { LOGO_URL } from "../utils/constants"
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import useInternetStatus from "../hooks/useInternetStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = 'Log in';
  const [btnName, setBtnName] = useState(true)
  const internetStatus = useInternetStatus();

  const { loggedInUser } = useContext(UserContext);

  const cart = useSelector((store) => store?.cart?.items);

  /**
   * ? we should not use<a> tag in react like:
   * ! < li > <a href="/about">About us </a></ >
   * * Since it refresh's the whole page
   */

  return (
    <div className='flex justify-between shadow-lg
      bg-yellow-100
      sm:bg-pink-100
      lg:bg-green-100' >
      <div className='logo-container' >
        <img className='w-28 m-4' src={LOGO_URL} />
      </div>
      < div className='flex items-center' >
        <ul className='flex p-4 m-4 bg-yellow-100 rounded-lg'>
          <li className="p-4 mx-4 hover:bg-blue-200 rounded-lg">Online Status: {internetStatus ? '✅': '🔴'}</li>
          <li className="p-4 mx-4 hover:bg-blue-200 rounded-lg"><Link to='/'>Home</Link></li>
          <li className="p-4 mx-4 hover:bg-blue-200 rounded-lg"> <Link to='/grocery'>Grocery</Link></li>
          <li className="p-4 mx-4 hover:bg-blue-200 rounded-lg"> <Link to='/about'>About Us</Link></li>
          <li className="p-4 mx-4 hover:bg-blue-200 rounded-lg"> <Link to='/contact'>Contact Us</Link></li>
          <li className="p-4 mx-4 hover:bg-blue-200 rounded-lg"> <Link to='/cart'>Cart {cart.length}</Link></li>
          <button className='p-4 mx-4 bg-gray-200 p4 m4 hover:bg-blue-200 rounded-lg' onClick={() => { setBtnName(!btnName); console.log('btnName', btnName) }}>{btnName ? 'Log In' : 'Log Out'}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header