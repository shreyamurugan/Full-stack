import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr';

// Import Google Font (Example: "Dancing Script")
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      maxWidth: '100vw',
      margin: '0',
      padding: '50px',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      animation: 'slideIn 1.5s ease-out',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      width: '400px',
      height: '300px',
      marginBottom: '20px',
      backgroundImage: 'url(https://api.logo.com/api/v2/images?logo=logo_889c5085-6b5f-4a6a-958e-5b38304bdefb&u=1723393347&width=500&height=400&fit=contain&margins=100&format=webp&quality=60)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    sectionsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
    },
    section: {
      flex: '1 1 calc(33% - 20px)',
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 0.5s ease-out, slideIn 0.5s ease-out',
      animationFillMode: 'forwards',
    },
    sectionHeading: {
      fontSize: '1.5em',
      color: 'black',
      marginBottom: '10px',
      textTransform: 'uppercase',
      fontFamily: "'Dancing Script', cursive", // Use the selected font
      fontWeight: 'bold',
    },
    sectionText: {
      lineHeight: '1.6',
      color: 'black',
    },
    keyframes: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideIn {
        from { transform: translateY(20px); }
        to { transform: translateY(0); }
      }
    `,
  };

  return (
    <div style={styles.container}>
      <Navbarr /><br />
      <div style={styles.logo}></div>

      <div style={styles.sectionsContainer}>
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Our Story</h3>
          <p style={styles.sectionText}>
            Mindful Oasis was born out of a desire to bring mental health and wellness to everyone. Our journey began with a simple idea: to create a space where people could find balance and peace in their everyday lives.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Our Mission</h3>
          <p style={styles.sectionText}>
            Our mission is to empower individuals to take control of their mental well-being by providing accessible, high-quality resources that promote mental health, reduce stress, and enhance overall wellness.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Our Vision</h3>
          <p style={styles.sectionText}>
            We envision a world where mental wellness is a priority for all, where people can live fulfilling lives free from the stigma of mental health challenges, and where everyone has the tools to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
