// controllers/discController.js
const DiscQuestion = require('../models/DISCPersonalityTest.js');

// Controller to get all DISC questions
exports.getQuestions = async (req, res) => {
  try {
    const questions = await DiscQuestion.find({}).sort({ _id: 1 });
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

// Controller to process submitted answers and calculate personality result
exports.submitAnswers = async (req, res) => {
  // Expected request body: { answers: [ { questionId, score }, ... ] }
  const { answers } = req.body;

  // Initialize totals for each dimension (D, I, S, C)
  const totals = { D: 0, I: 0, S: 0, C: 0 };

  try {
    // Loop through each submitted answer
    for (const answer of answers) {
      // Find the question by its MongoDB _id
      const question = await DiscQuestion.findById(answer.questionId);
      if (question) {
        // Add the user's score (1–5) to the appropriate dimension
        totals[question.dimension] += answer.score;
      }
    }

    // Determine the dominant dimension (the one with the highest total)
    const dominantDimension = Object.keys(totals).reduce((prev, curr) =>
      totals[curr] > totals[prev] ? curr : prev
    );

    res.json({ totals, dominantDimension });
  } catch (error) {
    console.error('Error processing answers:', error);
    res.status(500).json({ error: 'Failed to process answers.' });
  }
};
