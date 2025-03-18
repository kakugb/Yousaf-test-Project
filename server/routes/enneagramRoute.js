// Desc: Enneagram route
const express = require('express');
const { getEnneagramQuestions, submitEnneagramAnswers } = require('../controllers/EnneagramController.js');

const router = express.Router();

router.get('/questions', getEnneagramQuestions);

router.post('/submit', submitEnneagramAnswers);

module.exports = router;