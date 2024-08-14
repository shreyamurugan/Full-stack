// src/Shreya/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., validate username and password)
    console.log('Logging in with:', username, password);
    
    // For demonstration purposes, assume login is always successful
    // Replace this with actual authentication logic
    if (username === 'admin1234' && password === 'shreya') {
      navigate('/admin-dashboard');  // Redirect to admin home page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: url('https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center/cover;
          padding: 0 20px;
        }
        .login-form {
          max-width: 400px;
          width: 100%;
          padding: 20px;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent white background */
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .login-form:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        label {
          display: block;
          margin-bottom: 15px;
          font-weight: bold;
          color: white;
        }
        input {
          width: calc(100% - 16px);
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        input:focus {
          border-color: #007bff;
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
          outline: none;
        }
        button {
          display: block;
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
