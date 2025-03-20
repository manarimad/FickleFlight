import React from 'react';
import SearchBar from '../components/SearchBar';
import '../styles/header.css';
import bannerBg from '../assets/Banner  Background.png';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="header-content">
        <h1>Let's explore & travel the world</h1>
        <p>Find the best destinations and the most popular stays!</p>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;