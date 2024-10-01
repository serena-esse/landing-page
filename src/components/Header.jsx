// src/components/Header.js
import React from "react";
import "./Header.css"; // Import del file CSS

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">VERVE</h1>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#services">Servizi</a>
            </li>

            <li>
              <a href="#footer">Contatti</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
