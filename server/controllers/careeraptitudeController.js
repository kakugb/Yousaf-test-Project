// controllers/careerAptitudeController.js
const CareerAptitudeQuestion = require('../models/CareerAptitudePersonalityTest.js');

const careerTypes = {
  Analytical: 'Data Analyst, Research Scientist, Financial Analyst',
  Creative: 'Designer, Artist, Marketing Specialist',
  Leadership: 'Project Manager, Executive, Team Leader',
  Technical: 'Software Developer, Engineer, IT Specialist',
  Organized: 'Project Manager, Executive Assistant, Accountant',
  Empathy: 'Counselor, Social Worker, Healthcare Professional',
  Practical: 'Engineer, Mechanic, Construction Manager',
  Communication: 'Public Relations Specialist, Journalist, Teacher',
  Adventurous: 'Travel Guide, Entrepreneur, Adventure Instructor',
  Persuasive: 'Sales Manager, Lawyer, Politician',
};


exports.getCareerAptitudeQuestions = async (req, res) => {
  try {
    const questions = await CareerAptitudeQuestion.find({}).sort({ _id: 1 });
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching Career Aptitude questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

exports.submitCareerAptitudeAnswers = async (req, res) => {
  const { answers } = req.body;
  const totals = {
    Analytical: 0,
    Creative: 0,
    Leadership: 0,
    Technical: 0,
    Organized: 0,
    Empathy: 0,
    Practical: 0,
    Communication: 0,
    Adventurous: 0,
    Persuasive: 0
  };

  try {
    // Process the answers and accumulate scores
    for (const answer of answers) {
      const question = await CareerAptitudeQuestion.findById(answer.questionId);

      if (question) {
        let score = answer.score;
        if (question.reverseScored) {
          score = 4 - score; // Reverse scoring
        }

        totals[question.category] += score;
      }
    }

    // Determine the category with the highest score
    const highestCategory = Object.keys(totals).reduce((a, b) => (totals[a] > totals[b] ? a : b));

    // Return career recommendations based on highest category
    const result = careerTypes[highestCategory];

    res.json({ totals, highestCategory, result });
  } catch (error) {
    console.error('Error processing Career Aptitude answers:', error);
    res.status(500).json({ error: 'Failed to process answers.' });
  }
};

