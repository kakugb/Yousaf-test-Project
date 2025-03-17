// routes/careerAptitudeRoutes.js
const express = require('express');
const { getCareerAptitudeQuestions, submitCareerAptitudeAnswers } = require('../controllers/careerAptitudeController');

const router = express.Router();

// Route to get career aptitude questions
router.get('/questions', getCareerAptitudeQuestions);

// Route to submit answers and get results
router.post('/submit', submitCareerAptitudeAnswers);

module.exports = router;
