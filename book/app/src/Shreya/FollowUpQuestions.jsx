import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FollowUpQuestions = () => {
  const { state } = useLocation();
  const { selectedProblem } = state || {}; // Ensure selectedProblem is defined
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    duration: '',
    severity: '',
    frequency: '',
    triggers: '',
    impact: '',
    copingStrategies: '',
    supportSystem: '',
    pastTreatment: '',
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate('/improvement-plan', { state: { selectedProblem, answers } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <h2 style={styles.heading}>Follow-up Questions for {selectedProblem}</h2>
      <div style={styles.questionGroup}>
        <label style={styles.label}>How long have you been experiencing {selectedProblem}?</label>
        <input
          type="text"
          name="duration"
          value={answers.duration}
          onChange={handleChange}
          style={styles.input}
          placeholder="e.g., 6 months"
        />
      </div>
      <div style={styles.questionGroup}>
        <label style={styles.label}>How severe is your {selectedProblem} on a scale of 1 to 10?</label>
        <input
          type="number"
          name="severity"
          min="1"
          max="10"
          value={answers.severity}
          onChange={handleChange}
          style={styles.input}
          placeholder="1"
        />
      </div>
      <div style={styles.questionGroup}>
        <label style={styles.label}>How frequently do you experience {selectedProblem}?</label>
        <select
          name="frequency"
          value={answers.frequency}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="rarely">Rarely</option>
        </select>
      </div>
      <div style={styles.questionGroup}>
        <label style={styles.label}>What triggers or worsens your {selectedProblem}?</label>
        <textarea
          name="triggers"
          value={answers.triggers}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="e.g., work stress, family conflicts"
        />
      </div>
      <div style={styles.questionGroup}>
        <label style={styles.label}>How does {selectedProblem} impact your daily life?</label>
        <textarea
          name="impact"
          value={answers.impact}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="e.g., affects work, relationships, daily activities"
        />
      </div>
      <div style={styles.questionGroup}>
        <label style={styles.label}>What strategies do you use to cope with {selectedProblem}?</label>
        <textarea
          name="copingStrategies"
          value={answers.copingStrategies}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="e.g., meditation, exercise, talking to friends"
        />
      </div>
      <div style={styles.questionGroup}>
        <label style={styles.label}>Do you have a support system in place? (e.g., family, friends, therapist)</label>
        <textarea
          name="supportSystem"
          value={answers.supportSystem}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="e.g., support from family, friends, therapy"
        />
      </div>
      <div style={styles.questionGroup}>
        <label style={styles.label}>Have you received any past treatment or therapy for {selectedProblem}?</label>
        <textarea
          name="pastTreatment"
          value={answers.pastTreatment}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="e.g., previous therapy sessions, medications"
        />
      </div>
      <motion.button 
        onClick={handleNext} 
        disabled={!answers.duration || !answers.severity || !answers.frequency || !answers.triggers || !answers.impact || !answers.copingStrategies || !answers.supportSystem || !answers.pastTreatment}
        style={answers.duration && answers.severity && answers.frequency && answers.triggers && answers.impact && answers.copingStrategies && answers.supportSystem && answers.pastTreatment ? styles.button : styles.disabledButton}
        initial={{ opacity: 0 }}
        animate={{ opacity: answers.duration && answers.severity && answers.frequency && answers.triggers && answers.impact && answers.copingStrategies && answers.supportSystem && answers.pastTreatment ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, backgroundColor: '#0056b3' }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '40px auto',
    padding: '30px',
    maxWidth: '700px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '26px',
    fontWeight: '700',
  },
  questionGroup: {
    marginBottom: '25px',
    textAlign: 'left',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#555',
    fontSize: '18px',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
  },
  select: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    height: '120px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    resize: 'none',
    outline: 'none',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  disabledButton: {
    padding: '12px 24px',
    backgroundColor: '#ccc',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'not-allowed',
    fontSize: '16px',
  },
};

export default FollowUpQuestions;
