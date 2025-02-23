// routes/discRoutes.js
const express = require('express');
const router = express.Router();
const discController = require('../controllers/discController.js');

// GET endpoint to fetch all questions
router.get('/questions', discController.getQuestions);

// POST endpoint to submit answers and get results
router.post('/submit', discController.submitAnswers);

module.exports = router;
