// models/FeedingSchedule.js
const mongoose = require('mongoose');

const feedingScheduleSchema = new mongoose.Schema({
  dayOfWeek: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
});

const FeedingSchedule = mongoose.model('FeedingSchedule', feedingScheduleSchema);

module.exports = FeedingSchedule;
