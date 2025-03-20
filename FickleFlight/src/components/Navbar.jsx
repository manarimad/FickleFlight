import React from 'react';
import '../styles/navbar.css';
import userProfile from '../assets/profileIcon.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">FickleFlight</a>
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/hotels">Hotels</a></li>
            <li><a href="/offers">Offers</a></li>
          </ul>
        </div>
        <div className="user-profile">
          <a href="/profile">
          <img src={userProfile} alt="User Profile" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;