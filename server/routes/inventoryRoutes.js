// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// Get all inventory items
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new inventory item
router.post('/', async (req, res) => {
  const inventory = new Inventory({
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    unit: req.body.unit
  });

  try {
    const newInventoryItem = await inventory.save();
    res.status(201).json(newInventoryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware to get inventory item by ID
async function getInventoryItem(req, res, next) {
  let inventoryItem;
  try {
    inventoryItem = await Inventory.findById(req.params.id);
    if (inventoryItem == null) {
      return res.status(404).json({ message: 'Inventory item not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.inventoryItem = inventoryItem;
  next();
}

module.exports = router;
