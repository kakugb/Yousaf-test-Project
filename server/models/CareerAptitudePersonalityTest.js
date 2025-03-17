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
    enum: ['Analytical', 'Creative', 'Leadership', 'Technical', 'Organized', 'Empathy', 'Practical', 'Communication', 'Adventurous', 'Persuasive'], // Add 'Persuasive' here
  },
  reverseScored: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('CareerAptitudeQuestion', careerAptitudeSchema);
