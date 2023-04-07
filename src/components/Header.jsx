import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='header-container'>
      <img className='header-logo' src={logo} />
      <div className='header-title'>
        <h2>Phát triển hệ thống IoT</h2>
        <h2>Khoá cửa tự động</h2>
      </div>
      <div className='empty' />
    </div>
  );
};

export default Header;
