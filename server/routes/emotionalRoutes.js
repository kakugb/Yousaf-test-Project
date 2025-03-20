const express = require('express');
const { getEmotionalIntelligenceQuestions, submitEmotionalIntelligenceAnswers } = require('../controllers/emotionalController.js');

const router = express.Router();

// Route to fetch all EI test questions
router.get('/questions', getEmotionalIntelligenceQuestions);

// Route to submit answers and get the results
router.post('/submit', submitEmotionalIntelligenceAnswers);

module.exports = router;
