// controllers/discController.js
const DiscQuestion = require('../models/DISCPersonalityTest.js');
const discTypes = {
  D: {
    low: { 
      name: "Commander D", 
      description: "You take charge, make quick decisions, and love winning challenges. Obstacles? You bulldoze right through them!" 
    },
    medium: { 
      name: "Challenger D", 
      description: "You thrive on competition and push limits to reach the top. Settling is never an option for you!" 
    },
    high: { 
      name: "Driver D", 
      description: "Fast, focused, and goal-oriented—you get things done before others even start. Speed is your superpower!" 
    },
  },
  I: {
    low: { 
      name: "Entertainer I", 
      description: "Life is your stage! You light up rooms with your energy and love making people smile." 
    },
    medium: { 
      name: "Inspirer I", 
      description: "You lift others with positivity and spark excitement wherever you go. Your words can move mountains!" 
    },
    high: { 
      name: "Connector I", 
      description: "Making friends is your thing—you connect hearts and build bridges with your charm and warmth." 
    },
  },
  S: {
    low: { 
      name: "Supporter S", 
      description: "Loyal and dependable, you’re the rock everyone leans on. Steady and calm, you bring peace in chaos." 
    },
    medium: { 
      name: "Harmonizer S", 
      description: "You keep things peaceful and smooth. Conflict? Not on your watch—you’re all about good vibes!" 
    },
    high: { 
      name: "Nurturer S", 
      description: "Kind-hearted and caring, you put others first. Your warmth makes people feel instantly safe." 
    },
  },
  C: {
    low: { 
      name: "Analyzer C", 
      description: "Details matter to you—you dig deep, solve puzzles, and love getting things just right." 
    },
    medium: { 
      name: "Perfectionist C", 
      description: "Your standards are sky-high! You believe if it’s worth doing, it’s worth doing perfectly." 
    },
    high: { 
      name: "Planner C", 
      description: "You think before you act, mapping out every move. Surprises? Not on your carefully crafted plan!" 
    },
  },
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await DiscQuestion.find({}).sort({ _id: 1 });
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};



exports.submitAnswers = async (req, res) => {
  // Expecting the request body: { answers: [ { questionId, score }, ... ] }
  const { answers } = req.body;
  
  // Initialize totals for each dimension (D, I, S, C)
  const totals = { D: 0, I: 0, S: 0, C: 0 };

  try {
    // Accumulate score per dimension based on submitted answers
    for (const answer of answers) {
      const question = await DiscQuestion.findById(answer.questionId);
      if (question) {
        totals[question.dimension] += answer.score;
      }
    }

    // Determine the dominant dimension (the one with the highest total)
    const dominantDimension = Object.keys(totals).reduce((prev, curr) =>
      totals[curr] > totals[prev] ? curr : prev
    );

    // Get the total score for the dominant dimension
    const score = totals[dominantDimension];

    // Determine the sub-type based on thresholds:
    // Example thresholds: 10-23 (low), 24-36 (medium), 37-50 (high)
    let resultType;
    if (score <= 23) {
      resultType = discTypes[dominantDimension].low;
    } else if (score <= 36) {
      resultType = discTypes[dominantDimension].medium;
    } else {
      resultType = discTypes[dominantDimension].high;
    }

    // Return totals, dominantDimension, and the refined resultType (name and description)
    res.json({ totals, dominantDimension, resultType });
  } catch (error) {
    console.error('Error processing answers:', error);
    res.status(500).json({ error: 'Failed to process answers.' });
  }
};

