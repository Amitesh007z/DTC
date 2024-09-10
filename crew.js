const mongoose = require('mongoose');

const CrewSchema = new mongoose.Schema({
  crewId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Crew', CrewSchema);
