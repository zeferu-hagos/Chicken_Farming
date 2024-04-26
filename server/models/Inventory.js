// models/Inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
