import React from 'react';
import './Navbar.css'; 
import UpscallerLogo from '../../Assets/Images/UpscallerLogo.jpg'
import { Link } from 'react-router-dom';

const Navbar = ({openSignupPopup}) => {



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
          <li className="menuItem"><Link to='/'>Home</Link></li>
          <li className="menuItem">About</li>
          <li className="menuItem">Services</li>
        </ul>
      </div>

      {/* Right Section - Login and Signup Buttons */}
      <div className="buttons">
        <button className="button" style={{textDecoration:"none"}}><Link to='/login'>Login</Link></button>
        <button className="button"><Link to="/signup"  onClick={openSignupPopup}>Signup</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
