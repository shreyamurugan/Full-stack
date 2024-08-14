import React from 'react';
import Navbar from './Navbar';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  RadialLinearScale
} from 'chart.js';


// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  RadialLinearScale
);

const AdminDashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Appointments Over Time',
        data: [30, 40, 35, 50, 45, 60, 70],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Patient Satisfaction',
        data: [80, 85, 90, 75, 95, 80],
        backgroundColor: '#28a745',
        borderColor: '#1e7e34',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['New Patients', 'Returning Patients', 'Inactive Patients'],
    datasets: [
      {
        label: 'Patient Types',
        data: [45, 35, 20],
        backgroundColor: ['#007bff', '#28a745', '#ffc107'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const radarChartData = {
    labels: ['Mental Health', 'Physical Health', 'Emotional Well-being', 'Social Support', 'Sleep Quality', 'Stress Management'],
    datasets: [
      {
        label: 'Patient Wellness',
        data: [80, 70, 85, 90, 60, 75],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: '#007bff',
        borderWidth: 2,
        pointBackgroundColor: '#007bff',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <Navbar/>
      
      <div className="dashboard-content">
        <section>
          <h2>Application Overview</h2>
          <div className="overview-stats">
            <div className="stat-item">
              <h3>Total Patients</h3>
              <p>1,234</p>
            </div>
            <div className="stat-item">
              <h3>Total Appointments</h3>
              <p>567</p>
            </div>
            <div className="stat-item">
              <h3>Active Users</h3>
              <p>789</p>
            </div>
           
          </div>
        </section>
        <section>
          <h2>Recent Activities</h2>
          <ul>
            <li>New patient records added.</li>
            <li>Recent appointments scheduled.</li>
            <li>Application updates and bug fixes.</li>
            <li>New wellness resources uploaded.</li>
          </ul>
        </section>
        <section>
          <h2>Charts and Metrics</h2>
          <div className="charts">
            <div className="chart-item">
              <h3>Appointments Over Time</h3>
              <Line data={lineChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>
            <div className="chart-item">
              <h3>Patient Satisfaction</h3>
              <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>
            <div className="chart-item">
              <h3>Patient Types Distribution</h3>
              <Pie data={pieChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>
            <div className="chart-item">
              <h3>Patient Wellness</h3>
              <Radar data={radarChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .dashboard-container {
          padding: 20px;
          text-align: center;
        }
        .header {
          margin-bottom: 30px;
        }
        h1 {
          color: #007bff;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }
        h1:hover {
          color: #0056b3;
        }
       
        .dashboard-content {
          text-align: left;
          max-width: 1000px;
          margin: 0 auto;
        }
        section {
          margin-bottom: 30px;
        }
        section h2 {
          color: #0056b3;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }
        section h2:hover {
          color: #003d7a;
        }
        .overview-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 20px 0;
        }
        .stat-item {
          background-color: #f8f9fa;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          padding: 20px;
          width: 22%;
          margin: 0 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .stat-item:hover {
          box-shadow: 0 6px 10px rgba(0,0,0,0.2);
          transform: scale(1.02);
        }
        .stat-item h3 {
          margin: 0;
          color: #007bff;
        }
        .stat-item p {
          font-size: 24px;
          margin: 10px 0 0;
        }
        .charts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .chart-item {
          width: 45%;
          margin: 10px 0;
          padding: 20px;
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .chart-item:hover {
          box-shadow: 0 6px 10px rgba(0,0,0,0.2);
          transform: scale(1.02);
        }
        .chart-item h3 {
          margin-bottom: 10px;
          color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
