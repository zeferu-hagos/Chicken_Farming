// models/HealthMonitoring.js
const mongoose = require('mongoose');

const healthMonitoringSchema = new mongoose.Schema({
  chickenId: {
    type: Number,
    required: true
  },
  temperature: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const HealthMonitoring = mongoose.model('HealthMonitoring', healthMonitoringSchema);

module.exports = HealthMonitoring;
