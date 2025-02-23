// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('./models/DISCPersonalityTest.js');

const DISCPersonality = [
  { question: "I enjoy taking charge of situations.", dimension: "D" },
  { question: "I like challenging goals and high expectations.", dimension: "D" },
  { question: "I prefer quick decisions and immediate action.", dimension: "D" },
  { question: "I am comfortable with risks and uncertainty.", dimension: "D" },
  { question: "I am direct and straightforward in communication.", dimension: "D" },
  { question: "I get impatient when things move too slowly.", dimension: "D" },
  { question: "I am competitive and strive to be the best.", dimension: "D" },
  { question: "I prefer to lead rather than follow.", dimension: "D" },
  { question: "I am motivated by power and achievement.", dimension: "D" },
  {  question: "I am decisive and confident in my choices.", dimension: "D" },

  {  question: "I enjoy socializing and meeting new people.", dimension: "I" },
  {  question: "I am enthusiastic and energetic in group settings.", dimension: "I" },
  {  question: "I like to inspire and motivate others.", dimension: "I" },
  {  question: "I am persuasive and influential in conversations.", dimension: "I" },
  {  question: "I am optimistic and maintain a positive attitude.", dimension: "I" },
  {  question: "I enjoy being the center of attention.", dimension: "I" },
  {  question: "I am talkative and expressive in my communication.", dimension: "I" },
  {  question: "I prefer a fun and lively work environment.", dimension: "I" },
  {  question: "I am comfortable sharing my ideas and opinions.", dimension: "I" },
  {  question: "I value recognition and praise for my achievements.", dimension: "I" },

  {  question: "I am patient and calm under pressure.", dimension: "S" },
  {  question: "I am supportive and considerate of others' feelings.", dimension: "S" },
  {  question: "I prefer a stable and consistent environment.", dimension: "S" },
  {  question: "I am loyal and dedicated to my relationships.", dimension: "S" },
  {  question: "I avoid conflicts and seek harmonious solutions.", dimension: "S" },
  {  question: "I am a good listener and empathetic towards others.", dimension: "S" },
  {  question: "I value teamwork and cooperation.", dimension: "S" },
  {  question: "I am dependable and follow through on commitments.", dimension: "S" },
  {  question: "I prefer routine and predictable tasks.", dimension: "S" },
  {  question: "I am sensitive to others' needs and emotions.", dimension: "S" },

  {  question: "I am detail-oriented and organized.", dimension: "C" },
  {  question: "I value accuracy and high standards.", dimension: "C" },
  {  question: "I prefer to plan and analyze before taking action.", dimension: "C" },
  {  question: "I am cautious and careful in decision-making.", dimension: "C" },
  {  question: "I like to follow rules and procedures.", dimension: "C" },
  {  question: "I am critical of mistakes and strive for perfection.", dimension: "C" },
  {  question: "I am private and reserved in my communication.", dimension: "C" },
  {  question: "I focus on facts and data rather than emotions.", dimension: "C" },
  {  question: "I am disciplined and systematic in my work approach.", dimension: "C" },
  {  question: "I prefer structured and well-defined tasks.", dimension: "C" },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');

    // Clear existing questions (use with caution)
    await Question.deleteMany({});
    console.log('Cleared existing questions');

    // Insert our questions array
    await Question.insertMany(DISCPersonality);
    console.log('Seeded questions successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

seedDB();
