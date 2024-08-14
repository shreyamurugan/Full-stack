import React from 'react';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Navbar from './Navbar';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminReports = () => {
  // Sample data for patient report charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'New Patient Registrations',
        data: [25, 30, 20, 35, 40, 50],
        backgroundColor: '#007bff',
        borderColor: '#0056b3',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return ` ${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
          color: '#6c757d',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Patients',
          color: '#6c757d',
        },
      },
    },
  };

  return (
    <div className="reports-container">
      <Navbar/>
      
      <div className="reports-content">
        <section>
          <h2>Patient Registration Trends</h2>
          <div className="chart-container">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </section>
        <section>
          <h2>Recent Patient Records</h2>
          <table className="records-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Date of Registration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>John Doe</td>
                <td>2024-07-15</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>002</td>
                <td>Jane Smith</td>
                <td>2024-07-20</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td>003</td>
                <td>Michael Johnson</td>
                <td>2024-08-01</td>
                <td>Active</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </div>
      <style jsx>{`
        .reports-container {
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
        
        .reports-content {
          text-align: left;
          max-width: 1000px;
          margin: 0 auto;
        }
        section {
          margin-bottom: 30px;
        }
        section h2 {
          color: #0056b3;
          margin-bottom: 15px;
        }
        .chart-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .records-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .records-table th, .records-table td {
          padding: 12px;
          border: 1px solid #dee2e6;
          text-align: center;
        }
        .records-table th {
          background-color: #f8f9fa;
          color: #0056b3;
        }
        .records-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .records-table tr:hover {
          background-color: #e9ecef;
          transition: background-color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default AdminReports;
