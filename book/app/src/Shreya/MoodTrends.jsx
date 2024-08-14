import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the components
ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const MoodTrends = ({ moodEntries }) => {
  const dates = moodEntries.map(entry => entry.date);
  const moods = moodEntries.map(entry => entry.mood);

  const moodScores = moods.map(mood => {
    switch (mood) {
      case 'happy':
        return 4;
      case 'sad':
        return 1;
      case 'anxious':
        return 2;
      case 'angry':
        return 3;
      default:
        return 0;
    }
  });

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Mood Trend',
        data: moodScores,
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#007bff',
        pointHoverBackgroundColor: '#0056b3',
        animation: {
          duration: 1000,
          easing: 'easeInOutCubic',
        },
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Mood Trends</h2>
      <div style={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#555',
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        color: '#eee',
      },
      ticks: {
        color: '#555',
        font: {
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: '#333',
        font: {
          size: 14,
          family: '"Roboto", sans-serif',
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Mood Score: ${tooltipItem.raw}`;
        },
      },
      backgroundColor: '#333',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#007bff',
      borderWidth: 1,
    },
  },
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    fontFamily: '"Roboto", sans-serif',
  },
  chartContainer: {
    position: 'relative',
    height: '400px',
    width: '100%',
  },
};

export default MoodTrends;
