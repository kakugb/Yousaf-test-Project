const mongoose = require('mongoose');

// Schema for Enneagram Test Questions
const enneagramTestSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'The Reformer',
      'The Helper',
      'The Achiever',
      'The Individualist',
      'The Investigator',
      'The Loyalist',
      'The Enthusiast',
      'The Challenger',
      'The Peacemaker',
    ],
  },
  reverseScored: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('EnneagramTestQuestion', enneagramTestSchema);
