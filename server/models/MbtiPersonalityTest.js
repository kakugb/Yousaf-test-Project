// models/MbtiQuestion.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  dimension: {
    type: String,
    required: true,
    enum: ['E/I', 'S/N', 'T/F', 'J/P'],
  },
});

module.exports = mongoose.model('MbtiQuestion', questionSchema);
