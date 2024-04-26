// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const Dashboard = require('../models/Dashboard');

// Get all dashboards
router.get('/dashboard', async (req, res) => {
  try {
    const dashboards = await Dashboard.find();
    res.json(dashboards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific dashboard
router.get('/:id', getDashboard, (req, res) => {
  res.json(res.dashboard);
});

// Create a new dashboard
router.post('/', async (req, res) => {
  const dashboard = new Dashboard({
    title: req.body.title,
    description: req.body.description
    // Add other fields as needed
  });

  try {
    const newDashboard = await dashboard.save();
    res.status(201).json(newDashboard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware to get dashboard by ID
async function getDashboard(req, res, next) {
  let dashboard;
  try {
    dashboard = await Dashboard.findById(req.params.id);
    if (dashboard == null) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.dashboard = dashboard;
  next();
}

module.exports = router;
