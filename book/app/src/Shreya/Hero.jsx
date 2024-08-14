import React from 'react';

const heroStyle = {
  backgroundColor: '#e0f7fa',
  padding: '4rem',
  textAlign: 'center',
  color: '#00796b',
  animation: 'fadeIn 2s ease-out',
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const logoStyle = {
  height: '100px',  // Adjust the logo size as needed
  marginBottom: '10px',
};

const Hero = () => {
  return (
    <section
      style={heroStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <img 
        src="https://api.logo.com/api/v2/images?logo=logo_d17b5728-2fc6-4530-bc96-0b854d083465&u=1722846338&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"  // Replace with your image address
        alt="Logo" 
        style={logoStyle} 
      />
      <h1>MINDFUL OASIS</h1>
      <p>YOUR JOURNEY TO MENTAL HEALTH BEGINS HERE.</p>
    </section>
  );
};

export default Hero;
