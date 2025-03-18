const mongoose = require('mongoose');
const EnneagramQuestion = require('../models/EnneagramPersonalityTest.js');

const enneagramTypes = {
  "The Reformer": {
    focus: "Integrity, improvement, and the desire to follow rules.",
    description: "Type 1 individuals are driven by a strong inner sense of what is right and wrong. They have a deep desire to improve themselves and the world around them. They seek to live by high moral standards and are often perfectionistic. They are organized, responsible, and conscientious, striving to do things the 'right' way and expecting the same from others."
  },
  "The Helper": {
    focus: "Helping others, meeting their needs, and seeking approval.",
    description: "Type 2 individuals are caring, warm-hearted, and compassionate. They derive their sense of worth from helping others and often neglect their own needs. They are attentive to the emotional needs of those around them and have a natural ability to make others feel valued. However, they may struggle with setting boundaries and can sometimes feel resentful if their efforts are not appreciated."
  },
  "The Achiever": {
    focus: "Success, accomplishment, and gaining recognition.",
    description: "Type 3 individuals are success-oriented, energetic, and highly motivated. They are focused on achieving their goals and are often seen as competitive and driven by the need for recognition. They value efficiency and results and tend to measure their self-worth by their accomplishments. While they can be incredibly successful, they may struggle with work-life balance and a tendency to define themselves by their achievements."
  },
  "The Individualist": {
    focus: "Emotional depth, uniqueness, and personal identity.",
    description: "Type 4 individuals are introspective, sensitive, and creative. They are deeply in touch with their emotions and have a strong desire to express their unique identity. Often feeling different from others, they seek meaning and significance in life. They may experience feelings of longing or sadness and can be highly artistic or expressive. Their journey is about embracing their individuality while managing the emotional ups and downs that come with it."
  },
  "The Investigator": {
    focus: "Knowledge, independence, and introspection.",
    description: "Type 5 individuals are intellectual, analytical, and independent. They are driven by a desire to understand the world and often retreat into their minds for solitude and reflection. They value knowledge and expertise and prefer to be self-sufficient. While they may struggle with emotional expression, they are often highly perceptive and enjoy exploring complex ideas. They may also have a tendency to withdraw from others to maintain their autonomy."
  },
  "The Loyalist": {
    focus: "Security, loyalty, and anxiety management.",
    description: "Type 6 individuals are loyal, responsible, and seek security and guidance. They are often driven by a need to anticipate and prepare for potential threats or uncertainties. They value trust and are deeply committed to the people and systems they believe in. However, their fear of uncertainty can sometimes lead to anxiety, overthinking, and seeking reassurance from others."
  },
  "The Enthusiast": {
    focus: "Fun, adventure, and seeking new experiences.",
    description: "Type 7 individuals are adventurous, energetic, and always looking for new experiences. They are motivated by a desire to avoid pain or discomfort and instead focus on seeking pleasure, joy, and excitement. They are often optimistic, future-oriented, and quick to shift their attention to new possibilities. However, they may struggle with staying focused or dealing with difficult emotions."
  },
  "The Challenger": {
    focus: "Power, control, and protecting oneself and others.",
    description: "Type 8 individuals are assertive, strong-willed, and independent. They are driven by a need to protect themselves and others and are often seen as natural leaders. They dislike being controlled and seek autonomy and control over their environment. While they can be empowering and protective, they may also struggle with vulnerability and have a tendency to confront or challenge others."
  },
  "The Peacemaker": {
    focus: "Harmony, peace, and avoiding conflict.",
    description: "Type 9 individuals are peaceful, easy-going, and tend to avoid conflict. They seek harmony and acceptance, often going along with others' needs to keep the peace. They value unity and dislike tension or discord in relationships. However, they may struggle with inertia, passivity, or a tendency to suppress their own desires and emotions for the sake of others."
  }
};

exports.getEnneagramQuestions = async (req, res) => {
  try {
    const questions = await EnneagramQuestion.find({}).sort({ _id: 1 });
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching Enneagram questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
};

exports.submitEnneagramAnswers = async (req, res) => {
  const { answers } = req.body;
  const totals = {
    "The Reformer": 0,
    "The Helper": 0,
    "The Achiever": 0,
    "The Individualist": 0,
    "The Investigator": 0,
    "The Loyalist": 0,
    "The Enthusiast": 0,
    "The Challenger": 0,
    "The Peacemaker": 0
  };

  const maxScores = {
    "The Reformer": 40,
    "The Helper": 40,
    "The Achiever": 40,
    "The Individualist": 40,
    "The Investigator": 40,
    "The Loyalist": 40,
    "The Enthusiast": 40,
    "The Challenger": 40,
    "The Peacemaker": 40
  };

  try {
    for (const answer of answers) {
      const question = await EnneagramQuestion.findById(new mongoose.Types.ObjectId(answer.questionId));

      if (question) {
        let score = answer.score;
        if (question.reverseScored) {
          score = 4 - score;
        }

        totals[question.category] += score;
      }
    }

    const highestScoreType = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b);
    const result = enneagramTypes[highestScoreType];

    res.json({
      totals,
      personalityType: highestScoreType,
      result
    });
  } catch (error) {
    console.error('Error processing Enneagram answers:', error);
    res.status(500).json({ error: 'Failed to process answers.' });
  }
};
