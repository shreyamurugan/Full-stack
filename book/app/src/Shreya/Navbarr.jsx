import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/problem-selection">Problem</Link></li>
          <li><Link to="/mood-logger">Mood Tracker</Link></li>
          <li><Link to="/app">Appointment</Link></li>
          
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(90deg, #007bff, #00c6ff);
          padding: 15px 30px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-content {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .navbar-brand {
          font-size: 28px;
          font-weight: 700;
          color: white;
          text-align: center;
          flex-grow: 1;
        }
        .navbar-brand a {
          text-decoration: none;
          color: inherit;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
        }
        .navbar-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .navbar-menu.open {
          display: flex;
        }
        .navbar li {
          margin: 0 15px;
        }
        .navbar a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.3s, transform 0.3s;
        }
        .navbar a:hover {
          color: black;
          text-decoration: underline;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .navbar-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .navbar-menu {
            display: none;
            flex-direction: column;
            width: 100%;
            text-align: left;
          }
          .navbar-menu.open {
            display: flex;
          }
          .menu-toggle {
            display: block;
            margin-bottom: 10px;
          }
          .navbar li {
            margin: 10px 0;
            width: 100%;
          }
          .navbar a {
            display: block;
            padding: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbarr;
