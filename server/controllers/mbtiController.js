const mongoose = require('mongoose');
const MbtiQuestion = require('../models/MbtiPersonalityTest.js');

const mbtiTypes = {
  INTJ: { name: 'Architect', description: 'Strategic, analytical thinkers who value independence and efficiency.' },
  INTP: { name: 'Logician', description: 'Innovative thinkers driven by curiosity and logical reasoning.' },
  ENTJ: { name: 'Commander', description: 'Bold, imaginative, and strong-willed leaders, always finding a way or making one.' },
  ENTP: { name: 'Debater', description: 'Smart, curious thinkers who enjoy intellectual challenges and discussions.' },
  INFJ: { name: 'Advocate', description: 'Quiet, mystical idealists who are empathetic and insightful.' },
  INFP: { name: 'Mediator', description: 'Poetic, kind, and altruistic people driven by strong values and creativity.' },
  ENFJ: { name: 'Protagonist', description: 'Charismatic, inspiring leaders who can mesmerize their listeners.' },
  ENFP: { name: 'Campaigner', description: 'Enthusiastic, creative, and sociable free spirits.' },
  ISTJ: { name: 'Logistician', description: 'Responsible and organized individuals who value tradition and loyalty.' },
  ISFJ: { name: 'Defender', description: 'Warm, protective, and devoted to their close ones.' },
  ESTJ: { name: 'Executive', description: 'Organized and reliable, excellent at managing tasks and people.' },
  ESFJ: { name: 'Consul', description: 'Caring, social, and popular individuals who value harmony and connection.' },
  ISTP: { name: 'Virtuoso', description: 'Analytical and practical problem-solvers with a hands-on approach.' },
  ISFP: { name: 'Adventurer', description: 'Sensitive, artistic, and spontaneous individuals who love exploration.' },
  ESTP: { name: 'Entrepreneur', description: 'Energetic, perceptive, and adaptable individuals who thrive on action.' },
  ESFP: { name: 'Entertainer', description: 'Spontaneous, energetic, and enthusiastic performers.' }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await MbtiQuestion.find({}).sort({ _id: 1 });
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching MBTI questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

exports.submitAnswers = async (req, res) => {
  const { answers } = req.body;
  const totals = { 'E/I': 0, 'S/N': 0, 'T/F': 0, 'J/P': 0 };
  
  const maxScores = { 'E/I': 40, 'S/N': 56, 'T/F': 48, 'J/P': 52 };

  try {
    for (const answer of answers) {
      const question = await MbtiQuestion.findById(new mongoose.Types.ObjectId(answer.questionId));

      if (question) {
        let score = answer.score;
        if (question.reverseScored) {
          score = 4 - score;
        }

        totals[question.dimension] += score;
      }
    }

    const personality =
      (totals['E/I'] >= maxScores['E/I'] / 2 ? 'E' : 'I') +
      (totals['S/N'] >= maxScores['S/N'] / 2 ? 'S' : 'N') +
      (totals['T/F'] >= maxScores['T/F'] / 2 ? 'T' : 'F') +
      (totals['J/P'] >= maxScores['J/P'] / 2 ? 'J' : 'P');

    const result = mbtiTypes[personality];

    res.json({ totals, personality, result });
  } catch (error) {
    console.error('Error processing MBTI answers:', error);
    res.status(500).json({ error: 'Failed to process answers.' });
  }
};
