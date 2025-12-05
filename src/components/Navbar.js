import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../context/AuthContext";   // ✅ IMPORT AUTH

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { user, logout } = useAuth();  // ✅ USER & LOGOUT FROM CONTEXT

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="nav-left">
        <img src="/logo.png" alt="Clinic Logo" className="nav-logo" />
        <div className="brand-text">
          <h3>AawAZ Hearing &</h3>
          <h3>Speech Care Center</h3>
        </div>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><NavLink to="/" onClick={() => setOpen(false)}>HOME</NavLink></li>
        <li><NavLink to="/about" onClick={() => setOpen(false)}>ABOUT</NavLink></li>
        <li><NavLink to="/services" onClick={() => setOpen(false)}>SERVICES</NavLink></li>
        <li><NavLink to="/products" onClick={() => setOpen(false)}>PRODUCTS</NavLink></li>
        <li><NavLink to="/speech-therapy" onClick={() => setOpen(false)}>SPEECH THERAPY</NavLink></li>
        <li><NavLink to="/faq" onClick={() => setOpen(false)}>FAQ</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setOpen(false)}>CONTACT US</NavLink></li>

        {/* 👇 SHOW LOGIN WHEN USER IS NOT LOGGED IN */}
        {!user && (
          <li>
            <NavLink to="/login" className="login-btn" onClick={() => setOpen(false)}>
              LOGIN
            </NavLink>
          </li>
        )}

        {/* 👇 SHOW USER NAME + DROPDOWN AFTER LOGIN */}
        {user && (
          <li className="user-menu">
            <div
              className="user-name"
              onClick={() => setDropdown(!dropdown)}
            >
              {user.fullName} ▼
            </div>

            {dropdown && (
              <div className="dropdown-menu">
                <NavLink to="/profile" onClick={() => setOpen(false)}>Profile</NavLink>
                <button className="logout-btn" onClick={logout}>Logout</button>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
