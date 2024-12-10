import React, { useState } from 'react';
import './styles.css';
import { FaBars, FaChevronDown, FaMoon, FaSun, FaCog, FaSignOutAlt, FaHome, FaCalendar, FaDollarSign } from 'react-icons/fa';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className={`p-4 flex justify-between items-center h-16 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-teal-500 text-white'}`}>
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="w-16 h-16 mr-4" />
        <h1 className="text-2xl font-bold">WhereToNow</h1>
      </div>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li className="flex items-center space-x-2 hover:text-gray-200">
            <FaHome />
            <a href="/">Home</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-200">
            <FaCalendar />
            <a href="/plan">Plan Your Event</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-200">
            <FaDollarSign />
            <a href="/budget">Budget Tracker</a>
          </li>
        </ul>
      </nav>

      {/* Profile and Dropdown */}
      <div className="relative">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="bg-white text-black rounded-full p-2 flex items-center justify-center shadow-lg">
            <img src="/images/person.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
          {/* Profile Name */}
          <div className="text-sm font-semibold">
            Kuda Christine
          </div>
          <FaChevronDown className="text-lg" />
        </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className={`absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48 ${
            isDarkMode ? 'bg-gray-700 text-white' : ''
          }`}
        >
          <ul className="flex flex-col">
            <li
              className={`flex items-center p-2 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
              }`}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </li>
            <li
              className={`flex items-center p-2 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
              }`}
            >
              <FaCog className="mr-2" />
              Settings
            </li>
            <li
              className={`flex items-center p-2 text-red-500 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-red-100'
              }`}
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </li>
          </ul>
        </div>
      )}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <FaBars className="text-2xl cursor-pointer" />
      </div>

      {/* Dark Mode Toggle Switch */}
      <div className="md:hidden">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2 text-sm">Dark Mode</span>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="toggle-checkbox"
          />
          <span className="ml-2">
            {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
          </span>
        </label>
      </div>
    </header>
  );
}

export default Header;
