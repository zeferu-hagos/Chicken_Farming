import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './component/Dashboard';
import ExpenseTracking from './component/ExpenseTracking';
import HealthMonitoring from './component/HealthMonitoring';
import IncubationManagement from './component/IncubationManagement';
import InventoryManagement from './component/InventoryManagement';
import Settings from './component/Settings';
import './index.css';
import Navbar from './component/Navbar';
import FeedingSchedule from './component/FeedingSchedule';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ExpenseTracking" element={<ExpenseTracking />} />
        <Route path="/IncubationManagement" element={<IncubationManagement />} />
        <Route path="/HealthMonitoring" element={<HealthMonitoring />} />
        <Route path="/FeedingSchedule" element={<FeedingSchedule />} />
        <Route path="/InventoryManagement" element={<InventoryManagement />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
