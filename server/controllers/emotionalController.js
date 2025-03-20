const mongoose = require('mongoose');
const EmotionalIntelligenceQuestion = require('../models/EmotionalPersonalityTest.js');

const emotionalIntelligenceTypes = {
  "Emotional Awareness": {
    focus: "Recognizing and understanding your own emotions.",
    description: "Emotional awareness refers to the ability to recognize and understand your own emotions as they arise. It involves being mindful of how emotions influence your thoughts, behaviors, and decision-making. This category also includes understanding why certain emotions are triggered and being able to reflect on emotional experiences over time."
  },
  "Empathy": {
    focus: "Recognizing and connecting with others' emotions.",
    description: "Empathy is the ability to understand and share the feelings of others. It involves sensing how others are feeling, recognizing their emotional state, and responding to their emotional needs. Empathy allows you to connect with others on an emotional level and is an essential component of building strong relationships."
  },
  "Emotional Regulation": {
    focus: "Managing your emotions effectively.",
    description: "Emotional regulation refers to the ability to manage and control your emotions, especially in stressful or challenging situations. It involves recognizing when emotions are becoming overwhelming and taking steps to calm yourself or prevent impulsive reactions. This category includes managing both positive and negative emotions in a balanced way."
  },
  "Social Skills and Relationships": {
    focus: "Interacting positively with others and maintaining strong relationships.",
    description: "Social skills refer to the ability to interact effectively with others, including managing relationships, resolving conflicts, and building strong, positive connections. This category involves the ability to communicate clearly, understand social cues, and maintain healthy, respectful interactions with others."
  },
  "Self-Motivation": {
    focus: "Staying motivated, focused, and positive to achieve goals.",
    description: "Self-motivation refers to the ability to set goals, stay focused, and maintain a positive outlook even in the face of challenges. It involves managing your own motivation and driving yourself to pursue meaningful activities, whether in your personal or professional life."
  }
};

// Controller to fetch all EI test questions
exports.getEmotionalIntelligenceQuestions = async (req, res) => {
  try {
    const questions = await EmotionalIntelligenceQuestion.find({}).sort({ _id: 1 });
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching EI questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

// Controller to process submitted answers and calculate EI results
exports.submitEmotionalIntelligenceAnswers = async (req, res) => {
  const { answers } = req.body;
  const totals = {
    "Emotional Awareness": 0,
    "Empathy": 0,
    "Emotional Regulation": 0,
    "Social Skills and Relationships": 0,
    "Self-Motivation": 0
  };

  try {
    for (const answer of answers) {
      const question = await EmotionalIntelligenceQuestion.findById(new mongoose.Types.ObjectId(answer.questionId));

      if (question) {
        let score = answer.score;
        if (question.reverseScored) {
          score = 4 - score;
        }

        totals[question.category] += score;
      }
    }

    const highestScoreType = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b);
    const result = emotionalIntelligenceTypes[highestScoreType];

    res.json({
      totals,
      personalityType: highestScoreType,
      result
    });
  } catch (error) {
    console.error('Error processing EI answers:', error);
    res.status(500).json({ error: 'Failed to process answers.' });
  }
};
