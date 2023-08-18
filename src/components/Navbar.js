import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
      <div className="nav-section">
        <div className="nav-slide">

        <button className='nav-text'>Register</button>
        <button className='nav-text'>Sign In</button>
        </div>
      </div>
  )
}
Navbar();

export default Navbar;