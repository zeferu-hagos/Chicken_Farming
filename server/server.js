// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const dashboardRoutes = require('./routes/dashboardRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const feedingScheduleRoutes = require('./routes/feedingScheduleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Middleware
app.use(express.json());

// Routes
// Add your routes here

app.use('/dashboard', dashboardRoutes);
app.use('/ExpenseTracking', expenseTrackingRoutes);
app.use('/IncubationManagement', incubationManagementRoutes);
app.use('/HealthMonitoring', healthMonitoringRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/feeding-schedule', feedingScheduleRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
