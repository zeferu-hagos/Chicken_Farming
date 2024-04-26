// models/IncubationManagement.js
const mongoose = require('mongoose');

const incubationManagementSchema = new mongoose.Schema({
  // Define schema fields for Incubation Management component
  // Example:
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  // Add more fields as needed
});

const IncubationManagement = mongoose.model('IncubationManagement', incubationManagementSchema);

module.exports = IncubationManagement;
