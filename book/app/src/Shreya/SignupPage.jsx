import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState(''); // Date of birth
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    if (pwd.length < minLength) return 'Password must be at least 8 characters long';
    if (!hasUppercase) return 'Password must contain at least one uppercase letter';
    if (!hasLowercase) return 'Password must contain at least one lowercase letter';
    if (!hasNumber) return 'Password must contain at least one number';
    if (!hasSpecialChar) return 'Password must contain at least one special character';
    
    return '';
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      username,
      email,
      phonenumber: phoneNumber,
      password,
      role: 'USER',
      dob: dob  // Date of birth
    };

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Registration successful! Age: ${data.age}`);
        navigate('/user-login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <form className={`signup-form ${loading ? 'loading' : ''}`} onSubmit={handleSignup}>
        <h2>Signup</h2>
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
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        {loading && <div className="spinner"></div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <div className="login-link">
          <button onClick={() => navigate('/user-login')}>Already have an account? Login</button>
        </div>
      </form>
      <style jsx>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: url('https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center/cover;
          background-attachment: fixed;
        }
        .signup-form {
          max-width: 400px;
          width: 100%;
          padding: 20px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          opacity: 0;
          transform: translateY(-30px);
          animation: fadeInUp 0.5s forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .signup-form.loading {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .signup-form:hover:not(.loading) {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        h2, label, .login-link, .error-message {
          color: white;
        }
        label {
          display: block;
          margin-bottom: 15px;
          font-weight: bold;
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
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        button:disabled {
          background-color: #0056b3;
          cursor: not-allowed;
        }
        .login-link {
          text-align: center;
          margin-top: 15px;
        }
        .login-link button {
          background: none;
          border: none;
          color: #28a745;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        .login-link button:hover {
          color: #1e7e34;
          text-decoration: underline;
        }
        .error-message {
          color: #d9534f;
          font-size: 0.9em;
          margin: 10px 0;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #007bff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
