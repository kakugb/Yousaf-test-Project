const mongoose = require('mongoose');

// Schema for Career Aptitude Questions
const careerAptitudeSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Analytical Thinker',
      'Conflict Resolution & Leadership',
      'Practical & Hands-On',
      'Communication & Language',
      'Technology-Oriented',
      'Organized & Detail-Oriented',
      'Creative & Aesthetic',
      'Empathy & Social Work',
      'Stress-Resistant & Adaptive',
    ], 
  },
  reverseScored: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('CareerAptitudeQuestion', careerAptitudeSchema);
