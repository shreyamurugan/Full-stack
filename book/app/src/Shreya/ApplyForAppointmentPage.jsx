import React, { useState } from 'react';
import Modal from 'react-modal'; // Import Modal from react-modal
import Navbarr from './Navbarr';

// Set up Modal root element
Modal.setAppElement('#root');

const ApplyForAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    doctor: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [price] = useState(50); // Example price, adjust as needed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.preferredDate && formData.preferredTime && formData.doctor && formData.paymentMethod) {
      try {
        // Get email from local storage
        const email = localStorage.getItem('email');

        // Include email in formData
        const requestData = { ...formData, email };

        // Send POST request to backend
        const response = await fetch('http://localhost:8080/appointments/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        const result = await response.json();

        if (result.success) {
          setShowModal(true);
          setResponseMessage('');
        } else {
          setResponseMessage(result.message);
        }
      } catch (error) {
        setResponseMessage('An error occurred. Please try again.');
      }
    } else {
      setResponseMessage('Please fill all required fields.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      reason: '',
      doctor: '',
      paymentMethod: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
    });
  };

  return (
    <div style={styles.container}>
      <Navbarr /><br /><br />
      <h2 style={styles.heading}>Apply for an Appointment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Preferred Date:</label>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label style={styles.label}>Preferred Time:</label>
        <select
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Select Time</option>
          <option value="08:00">08:00 AM</option>
          <option value="08:30">08:30 AM</option>
          <option value="09:00">09:00 AM</option>
          <option value="09:30">09:30 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="10:30">10:30 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="11:30">11:30 AM</option>
          <option value="13:00">01:00 PM</option>
          <option value="13:30">01:30 PM</option>
          <option value="14:00">02:00 PM</option>
          <option value="14:30">02:30 PM</option>
          <option value="15:00">03:00 PM</option>
          <option value="15:30">03:30 PM</option>
          <option value="16:00">04:00 PM</option>
          <option value="16:30">04:30 PM</option>
          <option value="17:00">05:00 PM</option>
        </select>
        <label style={styles.label}>Select Doctor:</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Select Doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Johnson">Dr. Johnson</option>
          <option value="Dr. Williams">Dr. Williams</option>
          <option value="Dr. Brown">Dr. Brown</option>
          <option value="Dr. Davis">Dr. Davis</option>
        </select>
        <label style={styles.label}>Reason for Appointment:</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Reason for Appointment"
          style={styles.textarea}
        />
        <div style={styles.priceInfo}>
          <p>Appointment Price: ${price}</p>
        </div>
        <label style={styles.label}>Payment Method:</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        {formData.paymentMethod === 'creditCard' && (
          <div style={styles.paymentDetails}>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              style={styles.input}
              required
            />
            <input
              type="text"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleChange}
              placeholder="Expiry Date (MM/YY)"
              style={styles.input}
              required
            />
            <input
              type="text"
              name="cardCvc"
              value={formData.cardCvc}
              onChange={handleChange}
              placeholder="CVC"
              style={styles.input}
              required
            />
          </div>
        )}
        <button type="submit" style={styles.button}>Submit Request</button>
        {responseMessage && <p style={styles.responseMessage}>{responseMessage}</p>}
      </form>

      {/* Modal for appointment details */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <h2>Appointment Details</h2>
        <p><strong>Doctor:</strong> {formData.doctor}</p>
        <p><strong>Date:</strong> {formData.preferredDate}</p>
        <p><strong>Time:</strong> {formData.preferredTime}</p>
        <p><strong>Patient Name:</strong> {formData.name}</p>
        <p><strong>Reason:</strong> {formData.reason}</p>
        <p><strong>Price:</strong> ${price}</p>
        <button onClick={closeModal} style={styles.button}>Close</button>
      </Modal>
    </div>
  );
};

// Styles for the modal
const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
  },
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: '600',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  select: {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '20px',
  },
  responseMessage: {
    marginTop: '10px',
    color: 'red',
  },
  paymentDetails: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '500px',
  },
  priceInfo: {
    margin: '20px 0',
  },
};

export default ApplyForAppointmentPage;
