// models/Settings.js
const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  // Define schema fields for Settings component
  // Example:
  darkMode: {
    type: Boolean,
    default: false
  },
  notifications: {
    type: Boolean,
    default: false
  },
  // Add more fields as needed
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
