// models/Dashboard.js
const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  // Define schema fields for the Dashboard component
  // Example:
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
