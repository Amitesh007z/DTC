const mongoose = require('mongoose');

const ShiftSchema = new mongoose.Schema({
  crewId: {
    type: String,
    required: true,
  },
  shiftType: {
    type: String,
    enum: ['linked', 'unlinked'],
    required: true,
  },
  assignedBus: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model('Shift', ShiftSchema);
