// models/ExpenseTracking.js
const mongoose = require('mongoose');

const expenseTrackingSchema = new mongoose.Schema({
  // Define schema fields for Expense Tracking component
  // Example:
  expenseDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  // Add more fields as needed
});

const ExpenseTracking = mongoose.model('ExpenseTracking', expenseTrackingSchema);

module.exports = ExpenseTracking;
