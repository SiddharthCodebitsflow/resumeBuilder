import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="nav-section">
      <div className='logo'>
        <a href="#"><img src="logo-2.png" alt="" /></a>
      </div>
      <input type='checkbox' id='check' />
      <div className="menu">
        <a href="">Resume Template</a>
        <a href="">CV Templates</a>
        <a href="">Cover Letters</a>
        <a href="">Plans and pricing</a>
        <a href="">Learn</a>
        <button className='nav-text'>Register</button>
        <button className='nav-text'>Sign In</button>
        <label htmlFor="check" className="close-menu"><FontAwesomeIcon icon={faXmark} className="xmark-icon"/></label>
      </div>
      <label htmlFor="check" className="open-menu"><FontAwesomeIcon icon={faBars} /></label>
    </div>
  )
}

export default Header;
