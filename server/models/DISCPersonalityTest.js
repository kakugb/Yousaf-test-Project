const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  dimension: {
    type: String,
    required: true,
    enum: ['D', 'I', 'S', 'C'], 
  },
});

module.exports = mongoose.model('DiscQuestion', questionSchema);
