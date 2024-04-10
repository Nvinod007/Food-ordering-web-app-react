import { LOGO_URL } from "../utils/constants"
import React from 'react';
import { useState } from 'react';

const Header = () => {
  // let btnName = 'Log in';
  const [btnName, setBtnName] = useState(true)
  return (
    <div className='header' >
      <div className='logo-container' >
        <img className='logo' src={LOGO_URL} />
      </div>
      < div className='nav' >
        <ul>
          <li>Home </li>
          <li> About us </li>
          <li> Contact Us </li>
          <li> Cart </li>
          <button className='login' onClick={() => { setBtnName(!btnName); console.log('btnName', btnName)}}>{btnName?'Log In':'Log Out'}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header