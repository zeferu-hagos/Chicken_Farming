// routes/feedingScheduleRoutes.js
const express = require('express');
const router = express.Router();
const FeedingSchedule = require('../models/FeedingSchedule');

// Get all feeding schedules
router.get('/', async (req, res) => {
  try {
    const feedingSchedules = await FeedingSchedule.find();
    res.json(feedingSchedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new feeding schedule
router.post('/', async (req, res) => {
  const feedingSchedule = new FeedingSchedule({
    dayOfWeek: req.body.dayOfWeek,
    time: req.body.time,
    amount: req.body.amount
  });

  try {
    const newFeedingSchedule = await feedingSchedule.save();
    res.status(201).json(newFeedingSchedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware to get feeding schedule by ID
async function getFeedingSchedule(req, res, next) {
  let feedingSchedule;
  try {
    feedingSchedule = await FeedingSchedule.findById(req.params.id);
    if (feedingSchedule == null) {
      return res.status(404).json({ message: 'Feeding schedule not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.feedingSchedule = feedingSchedule;
  next();
}

module.exports = router;
