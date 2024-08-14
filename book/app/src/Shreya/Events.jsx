import React from 'react';

const eventsStyle = {
  padding: '2rem',
  backgroundColor: '#f0f4f8',
  textAlign: 'center',
  marginTop: '2rem',
  animation: 'slideIn 1.5s ease-out',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '900px',
  margin: '2rem auto',
};

const eventsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '1rem',
};

const eventStyle = {
  flex: '1 1 calc(33% - 1rem)', // Makes the event cards responsive
  margin: '1rem 0',
  padding: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '20px', // Increase the borderRadius for a more curved look
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  textAlign: 'left',
};

const eventTitleStyle = {
  color: '#00796b',
  fontSize: '1.5rem',
  marginBottom: '0.5rem',
};

const eventDateStyle = {
  color: '#616161',
  fontSize: '1rem',
};

const styles = `
  @keyframes slideIn {
    0% { transform: translateY(-20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @media (max-width: 600px) {
    ${eventsContainerStyle} {
      flexDirection: 'column';
    }
    ${eventStyle} {
      margin: 0.5rem;
      padding: 1rem;
    }
  }

  .event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Events = () => {
  return (
    <section style={eventsStyle} id="events">
      <h2>Upcoming Events</h2>
      <div style={eventsContainerStyle}>
        <div style={eventStyle} className="event-card">
          <h3 style={eventTitleStyle}>Mindfulness Workshop</h3>
          <p>Join us for a session on mindfulness and meditation.</p>
          <p style={eventDateStyle}>Date: August 15, 2024</p>
        </div>
        <div style={eventStyle} className="event-card">
          <h3 style={eventTitleStyle}>Support Group Meeting</h3>
          <p>Connect with others in our monthly support group meeting.</p>
          <p style={eventDateStyle}>Date: August 20, 2024</p>
        </div>
        <div style={eventStyle} className="event-card">
          <h3 style={eventTitleStyle}>Webinar: Coping with Anxiety</h3>
          <p>Learn strategies to manage anxiety in our upcoming webinar.</p>
          <p style={eventDateStyle}>Date: August 25, 2024</p>
        </div>
      </div>
      <style>{styles}</style>
    </section>
  );
};

export default Events;
