import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Navbarr from './Navbarr';
const contactStyle = {
  padding: '2rem',
  backgroundColor: '#f0f8ff',
  textAlign: 'center',
  animation: 'fadeIn 2s ease-out'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'left',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 2s ease-out'
};

const inputStyle = {
  marginBottom: '1rem',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  transition: 'border-color 0.3s ease',
};

const inputFocusStyle = {
  borderColor: '#00796b'
};

const buttonStyle = {
  padding: '0.5rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#00796b',
  color: 'white',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease, transform 0.3s ease'
};

const buttonHoverStyle = {
  backgroundColor: '#004d40',
  transform: 'scale(1.05)'
};

const errorStyle = {
  color: 'red',
  fontSize: '0.875rem',
  marginBottom: '1rem',
  animation: 'fadeIn 1s ease-out'
};

const successStyle = {
  color: 'green',
  fontSize: '1rem',
  marginTop: '1rem',
  animation: 'fadeIn 1s ease-out'
};

const mapStyle = {
  width: '100%',
  height: '400px',
  border: 'none',
  marginBottom: '2rem',
  animation: 'fadeIn 2s ease-out'
};

const contactInfoStyle = {
  marginTop: '2rem',
  textAlign: 'left',
  maxWidth: '800px',
  margin: '0 auto',
  animation: 'fadeIn 2s ease-out'
};

const socialLinksStyle = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  animation: 'fadeIn 2s ease-out'
};

const socialIconStyle = {
  transition: 'transform 0.3s ease, color 0.3s ease'
};

const socialIconHoverStyle = {
  transform: 'scale(1.2)',
  color: '#00796b'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = inputFocusStyle.borderColor;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = inputStyle.borderColor;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitStatus({ type: 'info', message: 'Sending...' });
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      setTimeout(() => {
        setSubmitStatus({ type: 'success', message: 'Message sent! Thank you for reaching out.' });
        setFormData({
          name: '',
          email: '',
          message: '',
          file: null
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div style={contactStyle}>
      <Navbarr/><br></br>
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, please fill out the form below:</p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={inputStyle}
          required
        />
        {errors.name && <p style={errorStyle}>{errors.name}</p>}
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={inputStyle}
          required
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ ...inputStyle, height: '150px' }}
          required
        ></textarea>
        {errors.message && <p style={errorStyle}>{errors.message}</p>}

        <label htmlFor="file">Attach a File (optional)</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.transform = buttonHoverStyle.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.transform = 'scale(1)';
          }}
        >Send Message</button>
        
        {submitStatus && (
          <p style={submitStatus.type === 'success' ? successStyle : errorStyle}>
            {submitStatus.message}
          </p>
        )}
      </form>

      <div style={contactInfoStyle}>
        <h2>Contact Information</h2>
        <p>Address: 12/699 A11C ,CHEVIDIPET ,GUDALUR</p>
        <p>Phone: 6380334782</p>
        <p>Email: support@mentalhealthwellness.com</p>
        <p>Office Hours: Mon - Fri, 9am - 5pm</p>
      </div>

      <div>
        <h2>Our Location</h2>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.953613939483!2d79.13782741462207!3d10.790483792316394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5525a1f5d0c6b1%3A0x2f0e62e07367a5f2!2sTamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1628850941730!5m2!1sen!2sus"
          style={mapStyle}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div style={socialLinksStyle}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook
            size="2rem"
            style={socialIconStyle}
            onMouseEnter={(e) => e.target.style.transform = socialIconHoverStyle.transform}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter
            size="2rem"
            style={socialIconStyle}
            onMouseEnter={(e) => e.target.style.transform = socialIconHoverStyle.transform}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram
            size="2rem"
            style={socialIconStyle}
            onMouseEnter={(e) => e.target.style.transform = socialIconHoverStyle.transform}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </a>
      </div>
    
    </div>
    
  );
};

export default Contact;
