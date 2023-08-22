import React from 'react'
import './Header.css';

function Header() {
  return (
      <div className="nav-section">
        <div className='logo'>
          <img src="logo-2.png" alt="" />
        </div>
        <div className="menu">
          <a>Resume Template</a>
          <a>CV Templates</a>
          <a>Cover Letters</a>
          <a>Plans and pricing</a>
          <a>Learn</a>
        <button className='nav-text'>Register</button>
        <button className='nav-text'>Sign In</button>
        </div>
      </div>
  )
}

export default Header;

