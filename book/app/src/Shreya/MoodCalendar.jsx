import React from 'react';

const MoodCalendar = ({ moodEntries }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Mood Calendar</h2>
      <div style={styles.calendarContainer}>
        {moodEntries.length > 0 ? (
          <ul style={styles.list}>
            {moodEntries.map((entry, index) => (
              <li key={index} style={styles.listItem}>
                <div style={styles.date}>{entry.date}</div>
                <div style={styles.mood}>{entry.mood}</div>
                <div style={styles.note}>{entry.note}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.noEntries}>No mood entries available.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px auto',
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
  calendarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  listItem: {
    backgroundColor: '#ffffff',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    width: '100%',
    maxWidth: '600px',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  date: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#007bff',
    marginBottom: '5px',
  },
  mood: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
  note: {
    fontSize: '14px',
    color: '#777',
  },
  noEntries: {
    fontSize: '16px',
    color: '#999',
  },
};

export default MoodCalendar;
