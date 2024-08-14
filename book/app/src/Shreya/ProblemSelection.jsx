import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbarr from './Navbarr';
const ProblemSelection = () => {
  const [selectedProblem, setSelectedProblem] = useState('');
  const navigate = useNavigate();

  const handleSelect = (problem) => {
    setSelectedProblem(problem);
  };

  const handleNext = () => {
    if (selectedProblem) {
      navigate('/follow-up', { state: { selectedProblem } });
    }
  };

  return (
  <div>  <Navbarr/>
  <br></br>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <h2 style={styles.heading}>Select Your Mental Health Problem</h2>
      <motion.div
        style={styles.cardContainer}
      >
        {options.map((option) => (
          <motion.div
            key={option.value}
            style={{
              ...styles.card,
              backgroundColor: selectedProblem === option.value ? '#e0f7fa' : '#ffffff',
              border: selectedProblem === option.value ? '2px solid #00796b' : '2px solid #ddd',
            }}
            onClick={() => handleSelect(option.value)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: options.indexOf(option) * 0.1 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            {option.label}
          </motion.div>
        ))}
      </motion.div>
      <motion.button 
        onClick={handleNext} 
        disabled={!selectedProblem} 
        style={selectedProblem ? styles.button : styles.disabledButton}
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedProblem ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </motion.div>
    </div>
  );
};

// Options for problems
const options = [
  { value: 'sleeplessness', label: 'Sleeplessness' },
  { value: 'depression', label: 'Depression' },
  { value: 'anxiety', label: 'Anxiety' },
  { value: 'stress', label: 'Stress' },
  { value: 'loneliness', label: 'Loneliness' },
  { value: 'anger', label: 'Anger' },
];

const styles = {
  container: {
    textAlign: 'center',
    margin: '40px auto',
    padding: '20px',
    maxWidth: '600px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: '600',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  card: {
    padding: '20px',
    width: '150px',
    borderRadius: '8px',
    border: '2px solid #ddd',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    fontSize: '16px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  disabledButton: {
    padding: '12px 24px',
    backgroundColor: '#ccc',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'not-allowed',
    fontSize: '16px',
  },
};

export default ProblemSelection;
