import React from 'react';
import './Sidebar.css';
import logoImage from './small-logo.png'; // Import the logo image
import menuIcon from '../assets/menu-icon.png'; // Adjust path accordingly

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img width="20px" height="20px" src={menuIcon} alt="Menu Icon" className="menu-icon" />
        <img width="65px" height="45px" src={logoImage} alt="Logo" className="logo-image" />
        <span className="logo-text">Elevayt</span>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <img width="32" height="32" src="https://img.icons8.com/fluency-systems-regular/48/dashboard-layout.png" alt="dashboard-layout" />
          Dashboard
        </li>
        <li className="menu-item active">
          <img width="32" height="32" src="https://img.icons8.com/external-outline-design-circle/66/external-Candidates-job-services-outline-design-circle.png" alt="external-Candidates-job-services-outline-design-circle" />
          Candidates
        </li>
        <li className="menu-item">
          <img width="32" height="32" src="https://img.icons8.com/small/16/new-job.png" alt="new-job" />
          Jobs
        </li>
        <li className="menu-item">
          <img width="32" height="32" src="https://img.icons8.com/material-outlined/24/dashboard.png" alt="dashboard" />
          Hiring Calculator
        </li>
        <li className="menu-item">
          <img width="32" height="32" src="https://img.icons8.com/ios/50/test--v1.png" alt="test--v1" />
          Assessment
        </li>
        <li className="menu-item">
          <img width="32" height="32" src="https://img.icons8.com/windows/32/how-quest.png" alt="how-quest" />
          Administration
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
