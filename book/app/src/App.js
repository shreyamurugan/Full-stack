import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Shreya/AdminLogin';
import SignupPage from './Shreya/SignupPage';
import LoginPage from './Shreya/LoginPage';
import Home from './Shreya/Home';
import RoleSelection from './Shreya/RoleSelection';
import Donate from './Shreya/Donate';
import Logout from './Shreya/Logout';
import AdminDashboard from './Shreya/AdminDashboard';
import AdminReports from './Shreya/AdminReports';
import AdminPatients from './Shreya/AdminPatients';
import AdminAppointments from './Shreya/AdminAppointments';
import Contact from './Shreya/Contact';
import UnderstandingAnxiety from './Shreya/UnderstandingAnxiety';
import BenefitsOfMindfulness from './Shreya/BenefitsOfMindfulness';
import SelfCareTips from './Shreya/SelfCareTips';
import About from './Shreya/About';
import ProblemSelection from './Shreya/ProblemSelection';
import FollowUpQuestions from './Shreya/FollowUpQuestions';
import ImprovementPlan from './Shreya/ImprovementPlan';
import MoodTrackerPage from './Shreya/MoodTrackerPage';  // Updated import
import ApplyForAppointmentPage from './Shreya/ApplyForAppointmentPage';

const App = () => {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RoleSelection setRole={setRole} />} />
          {role === 'admin' && (
            <>
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-reports" element={<AdminReports />} />
              <Route path="/admin-patients" element={<AdminPatients />} />
              <Route path="/admin-appointments" element={<AdminAppointments />} />
              <Route path="/admin-logout" element={<Logout />} />
            </>
          )}
          {role === 'user' && (
            <>
              <Route path="/user-signup" element={<SignupPage />} />
              <Route path="/user-login" element={<LoginPage setRole={setRole} />} />
              
            </>
          )}
          <Route path="/contact" element={<Contact />} />
          <Route path="/understanding-anxiety" element={<UnderstandingAnxiety />} />
          <Route path="/benefits-of-mindfulness" element={<BenefitsOfMindfulness />} />
          <Route path="/self-care-tips" element={<SelfCareTips />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/problem-selection" element={<ProblemSelection />} />
          <Route path="/follow-up" element={<FollowUpQuestions />} />
          <Route path="/improvement-plan" element={<ImprovementPlan />} />
          <Route path="/mood-logger" element={<MoodTrackerPage />} />  
          <Route path="/app" element={<ApplyForAppointmentPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
