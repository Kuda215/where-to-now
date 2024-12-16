import React from "react";
import "./styles.css";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo">
        <img src="/images/logo.png" alt="Travel destination" className="headerLogo" />
        </div>
        <span className="site-name">WhereToNow</span>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">
              <i className="icon">🏠</i> Home
            </a>
          </li>
          <li>
            <a href="#trips">
              <i className="icon">✈️</i> Trips
            </a>
          </li>
          <li>
            <a href="#explore">
              <i className="icon">🌟</i> Explore
            </a>
          </li>
        </ul>
      </nav>

      <div className="action-section">
        <div className="search-bar">
          <FaSearch />
          <input  type="text" placeholder="Search..." />
        </div>

        <FaBell className="icon notification-icon" />
        <div className="profile-dropdown">
          <FaUser className="icon profile-icon" />
          <div className="dropdown">
            <ul>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
