import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ImprovementPlan = () => {
  const { state } = useLocation();
  const [selectedProblem, setSelectedProblem] = useState(state?.selectedProblem || '');
  const answers = state?.answers || {};

  const plans = {
    sleeplessness: [
      'Day 1: Establish a regular sleep schedule and stick to it.',
      'Day 2: Create a relaxing bedtime routine with calming activities.',
      'Day 3: Avoid screens and stimulants like caffeine and nicotine before bedtime.',
      'Day 4: Practice relaxation techniques such as deep breathing or progressive muscle relaxation.',
      'Day 5: Create a comfortable sleep environment, including a cool and dark room.',
      'Day 6: Avoid heavy meals and caffeine close to bedtime.',
      'Day 7: Consider a short nap during the day if you’re feeling extremely tired.',
    ],
    depression: [
      'Day 1: Set small, achievable goals to help build a sense of accomplishment.',
      'Day 2: Practice mindfulness or meditation to help manage stress and improve focus.',
      'Day 3: Connect with friends or family to build a support network.',
      'Day 4: Engage in physical activity like walking, yoga, or any form of exercise to boost your mood.',
      'Day 5: Write down your thoughts and feelings in a journal to process your emotions.',
      'Day 6: Try a new hobby or activity to stimulate your mind and create new interests.',
      'Day 7: Seek professional support or therapy if you feel it’s necessary for additional help.',
    ],
    anxiety: [
      'Day 1: Practice deep breathing exercises to help calm your mind and body.',
      'Day 2: Challenge negative thoughts by replacing them with positive affirmations.',
      'Day 3: Engage in regular physical exercise to reduce stress and anxiety.',
      'Day 4: Try progressive muscle relaxation techniques to alleviate physical tension.',
      'Day 5: Connect with a support group or therapist to share and manage your anxiety.',
      'Day 6: Avoid excessive caffeine and sugar intake as they can increase anxiety.',
      'Day 7: Spend time in nature or practice mindfulness to help ground yourself and reduce anxiety.',
    ],
    stress: [
      'Day 1: Identify and address the sources of stress in your life with practical solutions.',
      'Day 2: Practice stress-relief techniques such as yoga, meditation, or deep breathing.',
      'Day 3: Create a balanced schedule that includes time for relaxation and leisure activities.',
      'Day 4: Engage in a hobby or activity that you enjoy to divert your mind from stress.',
      'Day 5: Connect with loved ones and discuss your stress to receive support and understanding.',
      'Day 6: Practice good time management skills to prevent last-minute rushes and stress.',
      'Day 7: Consider professional help if stress becomes overwhelming or chronic.',
    ],
    loneliness: [
      'Day 1: Reach out to friends or family for a chat or a social gathering.',
      'Day 2: Join a club or group with shared interests to meet new people.',
      'Day 3: Volunteer for a cause you care about to connect with others and contribute positively.',
      'Day 4: Practice self-compassion and engage in self-care activities to improve your well-being.',
      'Day 5: Explore new hobbies or activities to find new ways to meet people and connect.',
      'Day 6: Attend social events or gatherings to expand your social circle and reduce feelings of loneliness.',
      'Day 7: Consider therapy or counseling to explore underlying issues of loneliness and develop strategies to manage it.',
    ],
    anger: [
      'Day 1: Identify the triggers that cause your anger and note them down.',
      'Day 2: Practice deep breathing exercises to help calm your mind when anger arises.',
      'Day 3: Engage in physical activities such as exercise to release pent-up frustration.',
      'Day 4: Use mindfulness techniques to stay present and manage your reactions.',
      'Day 5: Find healthy outlets for your anger, such as writing or creative activities.',
      'Day 6: Talk to a therapist or counselor to work through underlying issues contributing to your anger.',
      'Day 7: Develop and practice strategies for effective communication to express your feelings calmly.',
    ],
  };

  const videoUrls = {
    sleeplessness: 'https://www.youtube.com/embed/fOcJCXZwW-I',
    depression: 'https://www.youtube.com/embed/VlDgowUAyx4',
    anxiety: 'https://www.youtube.com/embed/uisV09nWzJ0',
    stress: 'https://www.youtube.com/embed/Nz9eAaXRzGg',
    loneliness: 'https://www.youtube.com/embed/1oanOmN83fw',
    anger: 'https://www.youtube.com/embed/C1N4f1F0vDU',
};




  const improvementPlan = plans[selectedProblem] || [];
  const defaultMessage = 'No improvement plan available for this issue.';

  const handleProblemSelection = (event) => {
    setSelectedProblem(event.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      {!state && (
        <>
          <h2 style={styles.heading}>Select a Problem to View Improvement Plan</h2>
          <select onChange={handleProblemSelection} style={styles.select} value={selectedProblem}>
            <option value="">Select a problem</option>
            {Object.keys(plans).map((problem, index) => (
              <option key={index} value={problem}>
                {problem.charAt(0).toUpperCase() + problem.slice(1)}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedProblem && (
        <div>
          <h3 style={styles.heading}>
            {improvementPlan.length
              ? `Your Improvement Plan for ${selectedProblem.charAt(0).toUpperCase() + selectedProblem.slice(1)}`
              : defaultMessage}
          </h3>
          {improvementPlan.length ? (
            <>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={styles.list}
              >
                {improvementPlan.map((plan, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    style={styles.listItem}
                  >
                    {plan}
                  </motion.li>
                ))}
              </motion.ul>
              <br></br>
              <h4 style={styles.heading}>Helpful Video</h4>
              <div style={styles.videoContainer}>
                
                <iframe
                  width="100%"
                  height="315"
                  src={videoUrls[selectedProblem]}
                  title={`Video for ${selectedProblem}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <br></br>
            </>
          ) : (
            <p style={styles.text}>{defaultMessage}</p>
          )}
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={styles.button}
      >
        <Link to="/home" style={styles.link}>
          Back to Home
        </Link>
      </motion.button>
    </motion.div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '40px auto',
    padding: '40px',
    maxWidth: '800px',
    borderRadius: '12px',
    backgroundImage: 'url(https://www.example.com/background.jpg)',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#00796b',
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: 'Arial, sans-serif',
  },
  subheading: {
    marginBottom: '15px',
    color: '#004d40',
    fontSize: '24px',
    fontWeight: '600',
    fontFamily: 'Arial, sans-serif',
  },
  description: {
    marginBottom: '20px',
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.5',
    fontFamily: 'Arial, sans-serif',
  },
  select: {
    padding: '12px',
    fontSize: '18px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #00796b',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'left',
    width: '100%',
    maxWidth: '700px',
  },
  listItem: {
    padding: '15px',
    marginBottom: '12px',
    backgroundColor: '#e0f2f1',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '18px',
    color: '#004d40',
    transition: 'transform 0.2s ease-in-out',
    fontFamily: 'Arial, sans-serif',
  },
  text: {
    fontSize: '18px',
    color: '#666',
    fontFamily: 'Arial, sans-serif',
  },
  videoContainer: {
    marginTop: '30px',
    width: '100%',
    maxWidth: '700px',
    height: '315px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
  },
  videoHeading: {
    marginBottom: '10px',
    color: '#004d40',
    fontSize: '22px',
    fontWeight: '600',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    marginTop: '30px',
    padding: '12px 20px',
    fontSize: '18px',
    color: '#ffffff',
    backgroundColor: '#00796b',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    textDecoration: 'none',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
  },
};

export default ImprovementPlan;