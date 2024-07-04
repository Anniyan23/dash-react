import React from 'react';
import './Header.css';
import logoHeader from '../assets/logo-header.png.png'; 

const Header = () => {
  return (
    <div className="header">
      <div className="title">Candidates</div>
      <div className="profile">
        <div className="bell-icon" ><i class="fa-regular fa-bell"></i></div>
        <div className="profile-name">Pushpak</div>
        <div className="profile-image">
        <img width="30px" height="30px"src={logoHeader} alt="Menu Icon" className="menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;


