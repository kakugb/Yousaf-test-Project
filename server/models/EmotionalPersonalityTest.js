const mongoose = require('mongoose');

// Schema for Emotional Intelligence Test Questions
const emotionalIntelligenceTestSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Emotional Awareness',
      'Empathy',
      'Emotional Regulation',
      'Social Skills and Relationships',
      'Self-Motivation'
    ],
  },
  reverseScored: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('EmotionalIntelligenceTestQuestion', emotionalIntelligenceTestSchema);
