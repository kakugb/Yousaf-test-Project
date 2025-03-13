const mongoose = require('mongoose'); 
const BigFiveQuestion = require('../models/BigFivePersonalityTest');
const bigFiveTypes = {
  E: {
    low: {
      name: "Introvert",
      description: "You prefer quiet, thoughtful settings and enjoy solitude over large social gatherings."
    },
    medium: {
      name: "Balanced Socializer",
      description: "You enjoy social interactions but also need personal time to recharge."
    },
    high: {
      name: "Extrovert",
      description: "You thrive in social environments and feel energized by interacting with others."
    }
  },
  O: {
    low: {
      name: "Practical Thinker",
      description: "You prefer routine and familiar experiences over exploring new and abstract ideas."
    },
    medium: {
      name: "Balanced Explorer",
      description: "You're open to new experiences but also value tried-and-tested methods."
    },
    high: {
      name: "Creative Innovator",
      description: "You enjoy intellectual discussions, abstract thinking, and new experiences."
    }
  },
  A: {
    low: {
      name: "Independent Thinker",
      description: "You prioritize logic and objectivity over emotional connections in decision-making."
    },
    medium: {
      name: "Considerate Thinker",
      description: "You balance empathy with logic, ensuring fairness while valuing relationships."
    },
    high: {
      name: "Compassionate Empath",
      description: "You highly value kindness, cooperation, and maintaining harmony in relationships."
    }
  },
  C: {
    low: {
      name: "Flexible & Spontaneous",
      description: "You prefer adaptability and go with the flow rather than sticking to strict plans."
    },
    medium: {
      name: "Balanced Planner",
      description: "You appreciate organization but can also handle spontaneity when needed."
    },
    high: {
      name: "Highly Organized",
      description: "You are structured, responsible, and prefer a well-planned and disciplined approach."
    }
  },
  N: {
    low: {
      name: "Emotionally Stable",
      description: "You remain calm under pressure and adapt well to stressful situations."
    },
    medium: {
      name: "Balanced Responder",
      description: "You manage emotions well, though occasional stress or worry can arise."
    },
    high: {
      name: "Highly Sensitive",
      description: "You may experience strong emotional responses, stress, or overthinking at times."
    }
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await BigFiveQuestion.find({}).sort({ _id: 1 });
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};



exports.submitAnswers = async (req, res) => {
    const { answers } = req.body;
    const totals = { E: 0, O: 0, A: 0, C: 0, N: 0 };

    try {
        for (const answer of answers) {
            const question = await BigFiveQuestion.findById(new mongoose.Types.ObjectId(answer.questionId));

            if (question) {
                let score = answer.score;

                // Reverse scoring if necessary
                if (question.reverseScored) {
                    score = 4 - score;
                }

                totals[question.dimension] += score;
            }
        }

        // Convert raw totals into personality results
        const results = {};
        Object.keys(totals).forEach(trait => {
            const score = totals[trait];

            let resultType;
            if (score <= 6) {
                resultType = bigFiveTypes[trait].low;
            } else if (score <= 13) {
                resultType = bigFiveTypes[trait].medium;
            } else {
                resultType = bigFiveTypes[trait].high;
            }

            results[trait] = resultType;
        });

        res.json({ totals, results });
    } catch (error) {
        console.error("Error processing answers:", error);
        res.status(500).json({ error: "Failed to process answers." });
    }
};

