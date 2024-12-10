// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">WhereToNoW</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/plan">Plan Your Event</a></li>
          <li><a href="/budget">Budget Tracker</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
