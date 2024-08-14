import React from 'react';
import Navbarr from './Navbarr';

const UnderstandingAnxiety = () => {
  const styles = {
    content: {
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      width: '100%',
      maxWidth: '1200px',  // Max width for larger screens
      margin: '0 auto',
      lineHeight: '1.6',
    },
    heading: {
      color: '#00796b',
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      flex: '1 1 calc(33.333% - 1rem)', // Adjust to fit three cards in a row
      boxSizing: 'border-box',
    },
    illustration: {
      width: '100%',
      height: 'auto',
      margin: '1rem 0',
      borderRadius: '8px',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1rem',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      backgroundColor: '#e0f7fa',
      margin: '0.5rem 0',
      padding: '0.5rem',
      borderRadius: '4px',
    },
    paragraph: {
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.content}>
      <Navbarr />
      <div style={styles.card}>
        <h1 style={styles.heading}>Understanding Anxiety</h1>
        <img
          src="https://www.tpoftampa.com/wp-content/uploads/2023/05/managing-depression-and-anxiety-turning-point-of-tampa.webp"
          alt="Understanding Anxiety"
          style={styles.illustration}
        />
        <p style={styles.paragraph}>
          Anxiety is a natural response to stress and can be beneficial in some situations. It can alert us to dangers and help us prepare and pay attention. However, when anxiety becomes excessive or chronic, it can interfere with daily life.
        </p>
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <p style={styles.paragraph}>
            There are different types of anxiety disorders, including generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, and specific phobias. Symptoms of anxiety can include feelings of nervousness, increased heart rate, rapid breathing, sweating, and a sense of impending doom.
          </p>
        </div>

        <div style={styles.card}>
          <ul style={styles.list}>
            <li style={styles.listItem}>Feeling nervous, restless, or tense</li>
            <li style={styles.listItem}>Having a sense of impending danger, panic, or doom</li>
            <li style={styles.listItem}>Increased heart rate</li>
            <li style={styles.listItem}>Rapid breathing (hyperventilation)</li>
            <li style={styles.listItem}>Sweating</li>
          </ul>
        </div>

        <div style={styles.card}>
          <p style={styles.paragraph}>
            If you or someone you know is struggling with anxiety, it's important to seek help. Treatments such as therapy, medication, and lifestyle changes can help manage symptoms and improve quality of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingAnxiety;
