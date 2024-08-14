import React, { useState } from 'react';

const MoodLogger = ({ addMoodEntry }) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mood) {
      const date = new Date().toLocaleDateString();
      addMoodEntry({ date, mood, note });
      setMood('');
      setNote('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Log Your Mood</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <select 
          value={mood} 
          onChange={(e) => setMood(e.target.value)} 
          style={styles.select}
        >
          <option value="">Select Mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="anxious">Anxious</option>
          <option value="angry">Angry</option>
        </select>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note (optional)"
          style={styles.textarea}
        />
        <button type="submit" disabled={!mood} style={mood ? styles.button : styles.disabledButton}>
          Log Mood
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px auto',
    padding: '20px',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    fontFamily: '"Roboto", sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  select: {
    margin: '10px 0',
    padding: '12px',
    width: '100%',
    maxWidth: '350px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '16px',
    color: '#333',
    backgroundColor: '#fafafa',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    ':focus': {
      borderColor: '#007bff',
      boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)',
      outline: 'none',
    },
  },
  textarea: {
    margin: '10px 0',
    padding: '12px',
    width: '100%',
    maxWidth: '350px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    backgroundColor: '#fafafa',
    height: '120px',
    resize: 'none',
    fontSize: '16px',
    color: '#333',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    ':focus': {
      borderColor: '#007bff',
      boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)',
      outline: 'none',
    },
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    ':hover': {
      backgroundColor: '#218838',
      transform: 'scale(1.05)',
    },
  },
  disabledButton: {
    padding: '12px 24px',
    backgroundColor: '#ccc',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'not-allowed',
    fontSize: '18px',
  },
};

export default MoodLogger;
