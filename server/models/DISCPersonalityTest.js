// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  // Add a field to designate the personality dimension
  dimension: {
    type: String,
    required: true,
    enum: ['D', 'I', 'S', 'C'], // Adjust these values based on your model
  },
});

module.exports = mongoose.model('DiscQuestion', questionSchema);
