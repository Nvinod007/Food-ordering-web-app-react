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
    <div className='flex justify-evenly shadow-lg p-4 py-2
      bg-yellow-100
      sm:bg-pink-100
      lg:bg-green-100' >
      <div className='logo-container'  >
        <img className='w-28 ' src={LOGO_URL} alt="Company Logo" />
      </div>
      < div className='flex-grow self-center' >
        <ul className='flex justify-end items-center flex-wrap'>
          <li className="mx-2 my-1 p-2 hover:bg-blue-200 rounded-lg">Online Status: {internetStatus ? '✅': '🔴'}</li>
          <li className="mx-2 my-1 p-2 hover:bg-blue-200 rounded-lg"><Link to='/'>Home</Link></li>
          <li className="mx-2 my-1 p-2 hover:bg-blue-200 rounded-lg"> <Link to='/grocery'>Grocery</Link></li>
          <li className="mx-2 my-1 p-2 hover:bg-blue-200 rounded-lg"> <Link to='/about'>About Us</Link></li>
          <li className="mx-2 my-1 p-2 hover:bg-blue-200 rounded-lg"> <Link to='/contact'>Contact Us</Link></li>
          <li className="mx-2 my-1 p-2 hover:bg-blue-200 rounded-lg"> <Link to='/cart'>Cart {cart.length}</Link></li>
          <button className='mx-2 my-1 p-2 bg-gray-200 hover:bg-blue-200 rounded-lg' onClick={() => { setBtnName(!btnName) }}>
            {btnName ? 'Log In' : 'Log Out'}
          </button>
          <li className="mx-2 my-1 p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header