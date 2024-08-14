// src/Shreya/Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Show confirmation popup
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
      // Perform necessary cleanup (e.g., clearing session, tokens) if required
      navigate('/'); // Redirect to the admin login page
    } 
  }, [navigate]); // Empty dependency array ensures this effect runs only once

  return (
    <div className="logout-container">
      <p>Processing logout...</p>
      <style jsx>{`
        .logout-container {
          padding: 20px;
          text-align: center;
        }
        p {
          color: #007bff;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default Logout;
