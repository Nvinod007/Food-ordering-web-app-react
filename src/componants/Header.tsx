import { LOGO_URL } from "../utils/constants"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useInternetStatus from "../hooks/useInternetStatus";

const Header = () => {
  // let btnName = 'Log in';
  const [btnName, setBtnName] = useState(true)
  const internetStatus = useInternetStatus();

  /**
   * ? we should use<a> tag in react like:
   * ! < li > <a href="/about">About us </a></ >
   * * Since it refresh's the whole page
   */

  return (
    <div className='flex justify-between shadow-lg
      bg-yellow-100
      sm:bg-pink-100
      lg:bg-green-100' >
      <div className='logo-container' >
        <img className='w-24' src={LOGO_URL} />
      </div>
      < div className='flex items-center' >
        <ul className='flex p-4 m-4'>
          <li className="px-4">Online Status: {internetStatus ? '✅': '🔴'}</li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"> <Link to='/grocery'>Grocery</Link></li>
          <li className="px-4"> <Link to='/about'>About Us</Link></li>
          <li className="px-4"> <Link to='/contact'>Contact Us</Link></li>
          <li className="px-4"> Cart </li>
          <button className='px-4' onClick={() => { setBtnName(!btnName); console.log('btnName', btnName)}}>{btnName?'Log In':'Log Out'}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header