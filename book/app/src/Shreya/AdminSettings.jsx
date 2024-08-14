import React from 'react';
import { Link } from 'react-router-dom';

const AdminSettings = () => {
  return (
    <div className="settings-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/admin-dashboard">Dashboard</Link></li>
          <li><Link to="/admin-reports">Reports</Link></li>
          <li><Link to="/admin-patients">Patients</Link></li>
          <li><Link to="/admin-appointments">Appointments</Link></li>
          <li><Link to="/admin-settings">Settings</Link></li>
          <li><Link to="/admin-logout">Logout</Link></li>
        </ul>
      </nav>
      <h1>Settings</h1>
      <p>Update application settings here.</p>
      <style jsx>{`
        .settings-container {
          padding: 20px;
          text-align: center;
        }
        h1 {
          color: #007bff;
        }
        .navbar {
          background-color: #f8f9fa;
          padding: 10px 0;
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
        }
        .navbar a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AdminSettings;
