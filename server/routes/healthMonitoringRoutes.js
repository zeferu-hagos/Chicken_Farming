// routes/healthMonitoringRoutes.js
const express = require('express');
const router = express.Router();
const HealthMonitoring = require('../models/HealthMonitoring');

// Get all health monitoring data
router.get('/', async (req, res) => {
  try {
    const healthMonitoringData = await HealthMonitoring.find();
    res.json(healthMonitoringData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new health monitoring data
router.post('/', async (req, res) => {
  const healthMonitoringData = new HealthMonitoring({
    chickenId: req.body.chickenId,
    temperature: req.body.temperature,
    weight: req.body.weight,
    status: req.body.status
  });

  try {
    const newHealthMonitoringData = await healthMonitoringData.save();
    res.status(201).json(newHealthMonitoringData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware to get health monitoring data by ID
async function getHealthMonitoringData(req, res, next) {
  let healthMonitoringData;
  try {
    healthMonitoringData = await HealthMonitoring.findById(req.params.id);
    if (healthMonitoringData == null) {
      return res.status(404).json({ message: 'Health monitoring data not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.healthMonitoringData = healthMonitoringData;
  next();
}

module.exports = router;
