// src/Shreya/RoleSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = ({ setRole }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setRole(role);
    if (role === 'admin') {
      navigate('/admin-login');
    } else if (role === 'user') {
      navigate('/user-signup');
    }
  };

  return (
    <div className="role-selection-container">
      <h1>Welcome to Mental Health and Wellness</h1>
      <h2>Select Your Role</h2>
      <div className="button-group">
        <button onClick={() => handleRoleSelection('admin')} className="role-button admin-button">Admin</button>
        <button onClick={() => handleRoleSelection('user')} className="role-button user-button">User</button>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .role-selection-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0 auto;
          text-align: center;
          background: url('https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center/cover;
          border-radius: 8px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          padding: 20px;
          animation: fadeIn 1s ease-in-out;
          position: relative;
        }

        .role-selection-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.8); /* Add a semi-transparent white overlay */
          border-radius: 8px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Shadow effect for border */
          z-index: -1;
        }

        h1 {
          margin-bottom: 10px;
          font-family: 'Segoe UI', sans-serif;
          font-size: 36px;
          color: white;
          font-weight: 700;
          animation: fadeIn 1.5s ease-in-out;
        }

        h2 {
          margin-bottom: 20px;
          font-family: 'Segoe UI', sans-serif;
          font-size: 20px;
          color: white;
          font-weight: 600;
          animation: fadeIn 2s ease-in-out;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .role-button {
          padding: 12px 24px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          color: white;
          transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
          animation: buttonBounce 2.5s infinite;
        }

        .admin-button {
          background: linear-gradient(135deg, #007bff, #0056b3);
          box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
        }

        .admin-button:hover {
          background: linear-gradient(135deg, #0056b3, #004080);
          box-shadow: 0 5px 10px rgba(0, 86, 179, 0.4);
          transform: translateY(-3px);
        }

        .user-button {
          background-color: #28a745;
          box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
        }

        .user-button:hover {
          background-color: #218838;
          box-shadow: 0 5px 10px rgba(33, 136, 56, 0.4);
          transform: translateY(-3px);
        }

        .role-button:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default RoleSelection;
