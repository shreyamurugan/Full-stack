import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr';

const Donate = () => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountChange = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here (e.g., integrate with Stripe or PayPal)
    alert(`Donated ${customAmount || amount}`);
  };

  const styles = {
    container: {
      padding: '50px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      animation: 'fadeInDown 2s',
    },
    headerText: {
      animation: 'fadeInUp 2s',
    },
    formGroup: {
      marginBottom: '15px',
    },
    formControl: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
    },
    paymentMethod: {
      margin: '10px 0',
    },
    button: {
      margin: '10px',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <Navbarr/>
      <header style={styles.header}>
        <h1>Make a Donation</h1>
        <p style={styles.headerText}>Thank you for supporting our cause</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>Donation Amount</label>
          <div>
            <button type="button" onClick={() => handleAmountChange(10)} style={styles.button}>$10.00</button>
            <button type="button" onClick={() => handleAmountChange(25)} style={styles.button}>$25.00</button>
            <button type="button" onClick={() => handleAmountChange(100)} style={styles.button}>$100.00</button>
            <button type="button" onClick={() => handleAmountChange(500)} style={styles.button}>$500.00</button>
            <button type="button" onClick={() => handleAmountChange(1000)} style={styles.button}>$1,000.00</button>
          </div>
          <input 
            type="number" 
            placeholder="Custom Amount" 
            value={customAmount}
            onChange={handleCustomAmountChange}
            style={styles.formControl} 
          />
        </div>
        <div style={styles.formGroup}>
          <label>Select Payment Method</label>
          <div style={styles.paymentMethod}>
            <input type="radio" id="stripe" name="paymentMethod" value="Stripe" defaultChecked /> 
            <label htmlFor="stripe">Stripe</label>
          </div>
          <div style={styles.paymentMethod}>
            <input type="radio" id="paypal" name="paymentMethod" value="PayPal" /> 
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div style={styles.formGroup}>
          <label>Personal Info</label>
          <input type="text" placeholder="First Name" required style={styles.formControl} />
          <input type="text" placeholder="Last Name" style={styles.formControl} />
          <input type="email" placeholder="Email Address" required style={styles.formControl} />
        </div>
        <div style={styles.formGroup}>
          <label>Credit Card Info</label>
          <input type="text" placeholder="Card Number" required style={styles.formControl} />
          <input type="text" placeholder="CVC" required style={styles.formControl} />
          <input type="text" placeholder="Cardholder Name" required style={styles.formControl} />
          <input type="text" placeholder="Expiration (MM/YY)" required style={styles.formControl} />
        </div>
        <div style={styles.formGroup}>
          <p>Donation Total: ${customAmount || amount}</p>
        </div>
        <button type="submit" style={styles.button}>Donate</button>
      </form>
      <footer>
        <p>Website built by The Free Website Guys 🚀</p>
      </footer>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #007bff;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          z-index: 1000; /* Ensure the navbar stays on top of other content */
        }
        .navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }
        .navbar li {
          margin: 0 15px;
        }
        .navbar a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 16px;
        }
        .navbar a:hover {
          text-decoration: underline;
        }
        /* Add padding to the top of the main content to avoid overlap */
        .main-content {
          padding-top: 60px; /* Adjust this value based on the height of your navbar */
        }
      `}</style>
    </div>
  );
};

export default Donate;
