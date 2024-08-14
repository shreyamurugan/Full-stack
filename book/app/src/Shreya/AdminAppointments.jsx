import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialAppointments = [
    {id: '001', patient: 'John Doe', age: 30, problem: 'Anxiety', date: '2024-07-15', time: '10:00 AM' },
    { id: '002', patient: 'Jane Smith', age: 25, problem: 'Depression', date: '2024-07-20', time: '11:00 AM' },
    { id: '003', patient: 'Michael Johnson', age: 45, problem: 'Stress', date: '2024-08-01', time: '02:00 PM' },
    { id: '004', patient: 'Emily Davis', age: 28, problem: 'Insomnia', date: '2024-08-05', time: '09:00 AM' },
    { id: '005', patient: 'William Brown', age: 52, problem: 'Panic Attacks', date: '2024-08-10', time: '03:00 PM' },
    { id: '006', patient: 'Olivia Taylor', age: 34, problem: 'OCD', date: '2024-08-12', time: '01:00 PM' },
    { id: '007', patient: 'James Wilson', age: 40, problem: 'Phobias', date: '2024-08-15', time: '04:00 PM' },
    { id: '008', patient: 'Sophia Miller', age: 22, problem: 'PTSD', date: '2024-08-20', time: '10:30 AM' },
    { id: '009', patient: 'Daniel Garcia', age: 29, problem: 'Eating Disorder', date: '2024-08-25', time: '11:30 AM' },
    { id: '010', patient: 'Mia Martinez', age: 31, problem: 'ADHD', date: '2024-08-30', time: '12:00 PM' },
];

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [editMode, setEditMode] = useState(null);
  const [editedAppointment, setEditedAppointment] = useState(null);

  const handleEdit = (appointment) => {
    setEditMode(appointment.id);
    setEditedAppointment({ ...appointment });
  };

  const handleChange = (e) => {
    setEditedAppointment({ ...editedAppointment, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setAppointments(appointments.map(app =>
      app.id === editedAppointment.id ? editedAppointment : app
    ));
    setEditMode(null);
  };

  const handleCancel = () => {
    setEditMode(null);
  };

  return (
    <div className="appointments-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/admin-dashboard">Dashboard</Link></li>
          <li><Link to="/admin-reports">Reports</Link></li>
          <li><Link to="/admin-patients">Patients</Link></li>
          <li><Link to="/admin-appointments">Appointments</Link></li>
          
          <li><Link to="/admin-logout">Logout</Link></li>
        </ul>
      </nav>
   
      <div className="appointments-list">
        {appointments.map((app) => (
          <div key={app.id} className={`appointment-card ${editMode === app.id ? 'editing' : ''}`}>
            {editMode === app.id ? (
              <div className="edit-form">
                <h3>Edit Appointment</h3>
                <label>
                  Patient Name:
                  <input
                    type="text"
                    name="patient"
                    value={editedAppointment.patient}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    name="age"
                    value={editedAppointment.age}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Problem:
                  <input
                    type="text"
                    name="problem"
                    value={editedAppointment.problem}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Date:
                  <input
                    type="date"
                    name="date"
                    value={editedAppointment.date}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Time:
                  <input
                    type="time"
                    name="time"
                    value={editedAppointment.time}
                    onChange={handleChange}
                  />
                </label>
                <button onClick={handleSave} className="save-button">Save</button>
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
              </div>
            ) : (
              <div className="appointment-details">
                <h3>Appointment ID: {app.id}</h3>
                <p><strong>Patient:</strong> {app.patient}</p>
                <p><strong>Age:</strong> {app.age}</p>
                <p><strong>Problem:</strong> {app.problem}</p>
                <p><strong>Date:</strong> {app.date}</p>
                <p><strong>Time:</strong> {app.time}</p>
                <button onClick={() => handleEdit(app)} className="edit-button">Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .appointments-container {
          padding: 20px;
          text-align: center;
        }
        h1 {
          color: #007bff;
          margin-bottom: 20px;
        }
        .navbar {
          background-color: #f8f9fa;
          padding: 10px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 20px;
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
          color: #007bff;
          font-weight: bold;
        }
        .navbar a:hover {
          text-decoration: underline;
        }
        .appointments-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .appointment-card {
          background-color: #f8f9fa;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          padding: 20px;
          width: 30%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .appointment-card:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .appointment-card.editing {
          background-color: #e9ecef;
          border-color: #007bff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .edit-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .edit-form label {
          margin: 10px 0;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 400px;
        }
        .edit-form input {
          padding: 8px;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          margin-top: 5px;
          font-size: 16px;
        }
        .save-button, .cancel-button, .edit-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
          margin-top: 10px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .save-button:hover, .edit-button:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }
        .cancel-button {
          background-color: #dc3545;
        }
        .cancel-button:hover {
          background-color: #c82333;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default AdminAppointments;
