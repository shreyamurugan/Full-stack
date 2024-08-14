import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const AdminPatients = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:8080/users/all');
        const data = await response.json();
        setPatients(data);
        setFilteredPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  useEffect(() => {
    // Filter patients based on the search query
    // const filtered = patients.filter(patient =>
    //   patient.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   patient.id.toString().includes(searchQuery)
    // );

    // setFilteredPatients(filtered);
  }, [searchQuery, patients]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="patients-container">
      <Navbar />
      <header className="header">
        <h1>Patients</h1>
        <p>Manage patient records and information here.</p>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search patients by name or ID..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="patients-content">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="patients-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Date of Registration</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.username}</td>
                    <td>{patient.age}</td>
                    <td>{patient.registeredDate}</td>
                    <td>{patient.email}</td>
                    <td>{patient.phonenumber}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No patients found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      <style jsx>{`
        .patients-container {
          padding: 20px;
          text-align: center;
        }
        .header {
          margin-bottom: 20px;
        }
        h1 {
          color: #007bff;
          margin-bottom: 10px;
        }
        .search-bar {
          margin-bottom: 20px;
        }
        .search-input {
          width: 100%;
          max-width: 600px;
          padding: 10px;
          border: 1px solid #ced4da;
          border-radius: 5px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }
        .search-input:focus {
          border-color: #007bff;
          outline: none;
        }
        .patients-content {
          text-align: left;
          max-width: 1000px;
          margin: 0 auto;
        }
        .patients-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .patients-table th, .patients-table td {
          padding: 12px;
          border: 1px solid #dee2e6;
          text-align: center;
        }
        .patients-table th {
          background-color: #f8f9fa;
          color: #0056b3;
        }
        .patients-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .patients-table tr:hover {
          background-color: #e9ecef;
          transition: background-color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default AdminPatients;
