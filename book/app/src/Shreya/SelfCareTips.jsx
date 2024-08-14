import React, { useState } from 'react';
import Navbarr from './Navbarr';

const SelfCareTips = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleClick = (circle) => {
    setSelectedCircle(selectedCircle === circle ? null : circle); // Toggle content display
  };

  const getContent = (circle) => {
    switch (circle) {
      case 'circle1':
        return <p>Taking time for yourself can help you recharge and improve overall well-being. Make sure to set aside time for activities you enjoy.</p>;
      case 'circle2':
        return <p>Eating balanced meals ensures you get the necessary nutrients your body needs to function properly and maintain energy levels.</p>;
      case 'circle3':
        return <p>Staying hydrated is essential for your health. Aim to drink plenty of water throughout the day to keep your body functioning well.</p>;
      case 'circle4':
        return <p>Connecting with loved ones provides emotional support and helps you feel valued and understood. Make time for meaningful social interactions.</p>;
      case 'circle5':
        return <p>Getting enough sleep is crucial for your physical and mental health. Aim for 7-9 hours of quality sleep each night.</p>;
      case 'circle6':
        return <p>Regular exercise improves physical health, boosts mood, and reduces stress. Try to incorporate some form of physical activity into your daily routine.</p>;
      case 'circle7':
        return <p>Practicing mindfulness can reduce stress and enhance your overall mental health. Consider incorporating meditation or deep breathing exercises into your day.</p>;
      default:
        return null;
    }
  };

  const styles = {
    container: {
      padding: '20px',
      paddingTop: '80px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'c',
      color: '#333',
      maxWidth: '1200px',
      margin: '0 auto',
      height: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    /* Add this to your global CSS file or in a style component */


    header: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '2em',
      fontWeight: 'bold',
      color: '#333',
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'italic',
    },
    circleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '200px',
    },
    circle: {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '0.9em',
      textAlign: 'center',
      padding: '10px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    circle1: {
      backgroundColor: '#64b5f6',
    },
    circle2: {
      backgroundColor: '#ffb74d',
    },
    circle3: {
      backgroundColor: '#4db6ac',
    },
    circle4: {
      backgroundColor: '#81c784',
    },
    circle5: {
      backgroundColor: '#ff8a65',
    },
    circle6: {
      backgroundColor: '#d4e157',
    },
    circle7: {
      backgroundColor: '#b39ddb',
    },
    animate: {
      animation: 'clickAnimation 1s',
    },
    contentCard: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: '16px', // Increased border radius for more rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '15px',
      textAlign: 'center',
      fontSize: '1em',
      color: '#555',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <Navbarr />
      <h1 style={styles.header}>Self-Care Tips</h1>
      {['circle1', 'circle2', 'circle3', 'circle4', 'circle5', 'circle6', 'circle7'].map(circle => (
        <div key={circle} style={styles.circleContainer}>
          <div
            style={{ ...styles.circle, ...styles[circle], ...(selectedCircle === circle ? styles.animate : {}) }}
            onClick={() => handleClick(circle)}
          >
            {circle === 'circle1' && 'Take Time for Yourself'}
            {circle === 'circle2' && 'Eat Balanced Meals'}
            {circle === 'circle3' && 'Stay Hydrated'}
            {circle === 'circle4' && 'Connect with Loved Ones'}
            {circle === 'circle5' && 'Get Enough Sleep'}
            {circle === 'circle6' && 'Exercise Regularly'}
            {circle === 'circle7' && 'Practice Mindfulness'}
          </div>
          {selectedCircle === circle && (
            <div style={styles.contentCard}>
              <div style={styles.content}>
                {getContent(circle)}
              </div>
            </div>
          )}
        </div>
      ))}
      <style>{`
        @keyframes clickAnimation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SelfCareTips;
