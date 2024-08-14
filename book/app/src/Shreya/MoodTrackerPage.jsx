import React, { useState } from 'react';
import MoodCalendar from './MoodCalendar';
import MoodTrends from './MoodTrends';
import MoodLogger from './MoodLogger';
import Navbarr from './Navbarr';

const MoodTrackerPage = () => {
  const [moodEntries, setMoodEntries] = useState([]);

  const addMoodEntry = (entry) => {
    setMoodEntries([...moodEntries, entry]);
  };

  return (
    <div style={styles.container}>
        <Navbarr/><br></br>
      <MoodLogger addMoodEntry={addMoodEntry} />
      <MoodCalendar moodEntries={moodEntries} />
      <MoodTrends moodEntries={moodEntries} />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
};

export default MoodTrackerPage;
