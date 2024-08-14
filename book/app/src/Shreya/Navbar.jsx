import React, { version } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
          <li><Link to="/admin-dashboard">Dashboard</Link></li>
          <li><Link to="/admin-reports">Reports</Link></li>
          <li><Link to="/admin-patients">Patients</Link></li>
          <li><Link to="/admin-appointments">Appointments</Link></li>
          
          <li><Link to="/admin-logout">Logout</Link></li>
        </ul>
      
      <style jsx>{`
        .navbar {
          background-color: #f8f9fa;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }
        .navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }
        .navbar li {
          margin: 0 15px;
        }
        .navbar a {
          text-decoration: none;
          color: #007bff;
          font-weight: bold;
          transition: color 0.3s ease, text-decoration 0.3s ease;
        }
        .navbar a:hover {
          text-decoration: underline;
          color: #0056b3;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;



