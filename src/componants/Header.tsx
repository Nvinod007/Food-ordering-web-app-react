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
    <div className='header' >
      <div className='logo-container' >
        <img className='logo' src={LOGO_URL} />
      </div>
      < div className='nav' >
        <ul>
          <li>Online Status: {internetStatus ? '✅': '🔴'}</li>
          <li><Link to='/'>Home</Link></li>
          <li> <Link to='/grocery'>Grocery</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
          <li> <Link to='/contact'>Contact Us</Link></li>
          <li> Cart </li>
          <button className='login' onClick={() => { setBtnName(!btnName); console.log('btnName', btnName)}}>{btnName?'Log In':'Log Out'}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header