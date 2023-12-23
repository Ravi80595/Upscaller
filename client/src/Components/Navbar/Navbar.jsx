import React from 'react';
import './Navbar.css'; 
import UpscallerLogo from '../../Assets/Images/UpscallerLogo.jpg'

const Navbar = () => {



return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <div className="logo">
        <img
          src={UpscallerLogo}
          alt="Logo"
          className="logoImage"
        />
      </div>

      {/* Center Section - Menu Bar */}
      <div className="menu">
        <ul className="menuList">
          <li className="menuItem">Home</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Services</li>
        </ul>
      </div>

      {/* Right Section - Login and Signup Buttons */}
      <div className="buttons">
        <button className="button">Login</button>
        <button className="button">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
