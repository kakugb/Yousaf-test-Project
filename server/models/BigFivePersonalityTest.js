const mongoose = require('mongoose');

const bigFiveQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  dimension: {
    type: String,
    required: true,
    enum: ['E', 'O', 'A', 'C', 'N'], 
  }
});

module.exports = mongoose.model('BigFiveQuestion', bigFiveQuestionSchema);
