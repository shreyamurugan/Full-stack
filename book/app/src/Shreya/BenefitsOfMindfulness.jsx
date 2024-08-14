import React from 'react';
import Navbarr from './Navbarr';

const BenefitsOfMindfulness = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9f9f9',
    },
    content: {
      flex: '1',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    heading: {
      fontSize: '2em',
      color: '#00796b',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      margin: '1rem',
      flex: '0 0 calc(50% - 2rem)', // Ensures two cards per row
      boxSizing: 'border-box',
      textAlign: 'center',
    },
    cardHeading1: {
      fontSize: '1.5em',
      fontFamily: 'Arial, sans-serif', // Custom font for the first heading
      color: '#00796b',
      marginBottom: '10px',
    },
    cardHeading2: {
      fontSize: '1.5em',
      fontFamily: 'Georgia, serif', // Custom font for the second heading
      color: '#00796b',
      marginBottom: '10px',
    },
    cardHeading3: {
      fontSize: '1.5em',
      fontFamily: 'Courier New, monospace', // Custom font for the third heading
      color: '#00796b',
      marginBottom: '10px',
    },
    cardHeading4: {
      fontSize: '1.5em',
      fontFamily: 'Verdana, sans-serif', // Custom font for the fourth heading
      color: '#00796b',
      marginBottom: '10px',
    },
    cardParagraph: {
      fontSize: '1em',
      color: '#333',
      marginBottom: '1rem',
      lineHeight: '1.6',
    },
    footer: {
      textAlign: 'center',
      fontSize: '0.9em',
      color: '#555',
      marginTop: '40px',
    },
  };

  return (
    <div style={styles.container}>
      <Navbarr /><br />
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.heading}>BENEFITS OF MINDFULNESS</h1>
          <p style={styles.cardParagraph}>
            Mindfulness can help reduce stress, improve your mental and physical health, and even increase your overall happiness in life. These mindfulness techniques can help you start reaping the benefits.
          </p>
        </header>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h2 style={styles.cardHeading1}>Mental Health Benefits</h2>
            <p style={styles.cardParagraph}>
              Mindfulness has been proven to help reduce symptoms of depression and anxiety. It helps individuals focus on the present moment, reducing rumination and negative thinking patterns. By practicing mindfulness, you can develop better emotional regulation, leading to a decrease in stress and an increase in overall life satisfaction.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardHeading2}>Physical Health Benefits</h2>
            <p style={styles.cardParagraph}>
              Practicing mindfulness can lead to significant improvements in physical health. It has been shown to reduce blood pressure, alleviate chronic pain, improve sleep, and enhance immune function. Mindfulness can also contribute to healthier lifestyle choices, such as better eating habits and increased physical activity.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardHeading3}>Cognitive Benefits</h2>
            <p style={styles.cardParagraph}>
              Regular mindfulness practice can improve your attention span, memory, and cognitive flexibility. It enhances your ability to focus and concentrate, allowing you to be more productive and efficient in your daily tasks.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardHeading4}>Emotional Benefits</h2>
            <p style={styles.cardParagraph}>
              Mindfulness helps you develop a greater awareness of your emotions and the ability to manage them effectively. It fosters self-compassion and empathy, leading to healthier relationships with others and a more positive outlook on life.
            </p>
          </div>
        </div>

        <footer style={styles.footer}>
          <p>© 2024 Mindfulness Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default BenefitsOfMindfulness;
