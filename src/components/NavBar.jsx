import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/images/logo_gitora.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navBar">

  
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img
          src={logo}
          alt="Gitora"
          id="logo-img"
        />
      </Link>

      {/* Desktop navigation */}
      <div className="right-nav">

        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/About" onClick={closeMenu}>About</Link>
          </li>

          <li>
            <Link to="/Services" onClick={closeMenu}>Services</Link>
          </li>

          <li>
            <Link to="/Contact" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>

        <button id="join-btn">
          Join Now
        </button>

      </div>

      {/* Mobile hamburger button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/About" onClick={closeMenu}>
            About
          </Link>

          <Link to="/Services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/Contact" onClick={closeMenu}>
            Contact Us
          </Link>

          <button id="mobile-join-btn" onClick={closeMenu}>
            Join Now
          </button>

        </div>
      )}

    </nav>
  );
};

export default NavBar;