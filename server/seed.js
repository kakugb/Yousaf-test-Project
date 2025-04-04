// seed.js
// require('dotenv').config();
// const mongoose = require('mongoose');
// const Question = require('./models/DISCPersonalityTest.js');

// const DISCPersonality = [
//   { question: "I enjoy taking charge of situations.", dimension: "D" },
//   { question: "I like challenging goals and high expectations.", dimension: "D" },
//   { question: "I prefer quick decisions and immediate action.", dimension: "D" },
//   { question: "I am comfortable with risks and uncertainty.", dimension: "D" },
//   { question: "I am direct and straightforward in communication.", dimension: "D" },
//   { question: "I get impatient when things move too slowly.", dimension: "D" },
//   { question: "I am competitive and strive to be the best.", dimension: "D" },
//   { question: "I prefer to lead rather than follow.", dimension: "D" },
//   { question: "I am motivated by power and achievement.", dimension: "D" },
//   {  question: "I am decisive and confident in my choices.", dimension: "D" },

//   {  question: "I enjoy socializing and meeting new people.", dimension: "I" },
//   {  question: "I am enthusiastic and energetic in group settings.", dimension: "I" },
//   {  question: "I like to inspire and motivate others.", dimension: "I" },
//   {  question: "I am persuasive and influential in conversations.", dimension: "I" },
//   {  question: "I am optimistic and maintain a positive attitude.", dimension: "I" },
//   {  question: "I enjoy being the center of attention.", dimension: "I" },
//   {  question: "I am talkative and expressive in my communication.", dimension: "I" },
//   {  question: "I prefer a fun and lively work environment.", dimension: "I" },
//   {  question: "I am comfortable sharing my ideas and opinions.", dimension: "I" },
//   {  question: "I value recognition and praise for my achievements.", dimension: "I" },

//   {  question: "I am patient and calm under pressure.", dimension: "S" },
//   {  question: "I am supportive and considerate of others' feelings.", dimension: "S" },
//   {  question: "I prefer a stable and consistent environment.", dimension: "S" },
//   {  question: "I am loyal and dedicated to my relationships.", dimension: "S" },
//   {  question: "I avoid conflicts and seek harmonious solutions.", dimension: "S" },
//   {  question: "I am a good listener and empathetic towards others.", dimension: "S" },
//   {  question: "I value teamwork and cooperation.", dimension: "S" },
//   {  question: "I am dependable and follow through on commitments.", dimension: "S" },
//   {  question: "I prefer routine and predictable tasks.", dimension: "S" },
//   {  question: "I am sensitive to others' needs and emotions.", dimension: "S" },

//   {  question: "I am detail-oriented and organized.", dimension: "C" },
//   {  question: "I value accuracy and high standards.", dimension: "C" },
//   {  question: "I prefer to plan and analyze before taking action.", dimension: "C" },
//   {  question: "I am cautious and careful in decision-making.", dimension: "C" },
//   {  question: "I like to follow rules and procedures.", dimension: "C" },
//   {  question: "I am critical of mistakes and strive for perfection.", dimension: "C" },
//   {  question: "I am private and reserved in my communication.", dimension: "C" },
//   {  question: "I focus on facts and data rather than emotions.", dimension: "C" },
//   {  question: "I am disciplined and systematic in my work approach.", dimension: "C" },
//   {  question: "I prefer structured and well-defined tasks.", dimension: "C" },
// ];

// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB Atlas');

//     // Clear existing questions (use with caution)
//     await Question.deleteMany({});
//     console.log('Cleared existing questions');

//     // Insert our questions array
//     await Question.insertMany(DISCPersonality);
//     console.log('Seeded questions successfully');
//     process.exit();
//   } catch (error) {
//     console.error('Error seeding the database:', error);
//     process.exit(1);
//   }
// };

// seedDB();


// require('dotenv').config();
// const mongoose = require('mongoose');
// const BigFiveQuestion = require('./models/BigFivePersonalityTest.js');

// const BigFivePersonality = [
//   { question: "Spending time within large social environments produces a feeling of energy for me.", dimension: "E", reverseScored: false },
//   { question: "I regularly begin discussions with unknown people.", dimension: "E", reverseScored: false },
//   { question: "I would rather join group activities instead of spending periods by myself.", dimension: "E", reverseScored: false },
//   { question: "I experience little trouble when I need to express my thoughts to others in group discussions.", dimension: "E", reverseScored: false },
//   { question: "The switch to solitude restores my energy levels after spending time with others.", dimension: "E", reverseScored: true }, // Reverse scored

//   { question: "My instinctual reactions are more important to me than using logical thinking.", dimension: "O", reverseScored: false },
//   { question: "Abstract discussions interest me more than solving practical problems.", dimension: "O", reverseScored: false },
//   { question: "My pattern recognition skills enable me to find hidden connections, which usually escape others.", dimension: "O", reverseScored: false },
//   { question: "When making decisions I usually depend on firsthand realities instead of abstract academic information.", dimension: "O", reverseScored: true }, // Reverse scored
//   { question: "Most of the time I notice present-day information instead of future prospects.", dimension: "O", reverseScored: true }, // Reverse scored

//   { question: "My choice of making decisions relies on logical thinking instead of emotional responses.", dimension: "A", reverseScored: true }, // Reverse scored
//   { question: "Making choices proves challenging whenever I need to consider the feelings of people involved.", dimension: "A", reverseScored: false },
//   { question: "A just world system matters to me above the maintenance of intimate connections.", dimension: "A", reverseScored: true }, // Reverse scored
//   { question: "When evaluating situations I trust in information above my personal experiences.", dimension: "A", reverseScored: true }, // Reverse scored
//   { question: "The capability of showing empathy stands higher than effective decision-making in my opinion for individuals who lead groups.", dimension: "A", reverseScored: false },

//   { question: "Having foresight over most decisions leads me to prefer advanced planning to spontaneous action.", dimension: "C", reverseScored: false },
//   { question: "A situation becomes discomforting to me whenever there exists no organizational pattern or direction.", dimension: "C", reverseScored: false },
//   { question: "The chance of new possibilities leads me to switch plans minutes before execution.", dimension: "C", reverseScored: true }, // Reverse scored
//   { question: "The flow of events makes me happy since I avoid rigid schedules.", dimension: "C", reverseScored: true }, // Reverse scored
//   { question: "The clearest steps that I follow lead me to perform at my best.", dimension: "C", reverseScored: false },

//   { question: "After making a decision I do not tend to question my choices.", dimension: "N", reverseScored: true }, // Reverse scored
//   { question: "I surrender myself to constant worry about former contacts together with past decisions.", dimension: "N", reverseScored: false },
//   { question: "Criticism positively affects me because I do not internalize it as personal feedback.", dimension: "N", reverseScored: true }, // Reverse scored
//   { question: "My worries focus heavily on my appearance in the eyes of others.", dimension: "N", reverseScored: false },
//   { question: "Stressful conditions fail to faze me while my ability to adjust to changing circumstances remains excellent.", dimension: "N", reverseScored: true } // Reverse scored
// ];

// // Function to Seed Database
// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('✅ Connected to MongoDB Atlas');

//     // Clear existing questions before inserting (USE WITH CAUTION)
//     await BigFiveQuestion.deleteMany({});
//     console.log('🗑️ Cleared existing Big Five questions');

//     // Insert new questions while preventing duplicates
//     await BigFiveQuestion.insertMany(BigFivePersonality);
//     console.log('✅ Seeded Big Five questions successfully');
    
//     process.exit();
//   } catch (error) {
//     console.error('❌ Error seeding the database:', error);
//     process.exit(1);
//   }
// };

// // Execute the function
// seedDB();






// require('dotenv').config();
// const mongoose = require('mongoose');
// const MbtiQuestion = require('./models/MbtiPersonalityTest'); // Ensure correct filename here

// const mbtiQuestions = [
//   { question: "Going out with a lot of individuals makes me feel active and passionate.", dimension: "E/I", reverseScored: false },
//   { question: "I take pleasure in introducing myself to new individuals first.", dimension: "E/I", reverseScored: false },
//   { question: "My preference is to spend my free time with others rather than being by myself.", dimension: "E/I", reverseScored: false },
//   { question: "The expression of my thoughts and feelings remains simple when sharing them with others in group settings.", dimension: "E/I", reverseScored: false },
//   { question: "The interactive environments at a quick pace make me feel most comfortable.", dimension: "E/I", reverseScored: false },
//   { question: "I speak about my thoughts prematurely even though I have not fully formed them mentally.", dimension: "E/I", reverseScored: false },
//   { question: "My work style includes teamwork instead of working alone.", dimension: "E/I", reverseScored: false },
//   { question: "The presence of others around me brings me a pleasant vibe although I refrain from talking to anyone.", dimension: "E/I", reverseScored: false },
//   { question: "My habit is to start speaking without fully preparing my thoughts.", dimension: "E/I", reverseScored: false },
//   { question: "Social interactions become exhausting when they extend for an extended period.", dimension: "E/I", reverseScored: true },

//   { question: "My habit is to depend on real-world applications instead of mathematical concepts.", dimension: "S/N", reverseScored: false },
//   { question: "My thoughts concentrate mainly on particular elements rather than broader concepts.", dimension: "S/N", reverseScored: false },
//   { question: "When making decisions I choose information from observation over instinct.", dimension: "S/N", reverseScored: false },
//   { question: "The structured method of problem-solving brings me satisfaction.", dimension: "S/N", reverseScored: false },
//   { question: "Real-world events fascinate me more than theoretical possibilities.", dimension: "S/N", reverseScored: false },
//   { question: "I trust familiar solutions instead of exploring new options.", dimension: "S/N", reverseScored: false },
//   { question: "Information from my past comes through clear details instead of emotional impressions.", dimension: "S/N", reverseScored: false },
//   { question: "I prefer tasks with specific instructions rather than open-ended ones.", dimension: "S/N", reverseScored: false },
//   { question: "My attention stays focused on potential opportunities of tomorrow rather than the present.", dimension: "S/N", reverseScored: true },
//   { question: "I prefer generating new solutions, even if they may not have practical applications.", dimension: "S/N", reverseScored: true },
//   { question: "Discussions about fresh concepts interest me more than ordinary matters.", dimension: "S/N", reverseScored: true },
//   { question: "I prefer discovering underlying mechanisms instead of accepting things without investigation.", dimension: "S/N", reverseScored: true },
//   { question: "My attention typically focuses on future alternatives rather than present situations.", dimension: "S/N", reverseScored: true },
//   { question: "Creative tasks appeal to me more than traditional problem-solving methods.", dimension: "S/N", reverseScored: true },

//   { question: "I make decisions based on rational thinking rather than personal emotions.", dimension: "T/F", reverseScored: false },
//   { question: "Fairness requires uniform standards across all individuals.", dimension: "T/F", reverseScored: false },
//   { question: "Competence holds more value than kindness in interactions.", dimension: "T/F", reverseScored: false },
//   { question: "Efficiency is more important than harmony in relationships.", dimension: "T/F", reverseScored: false },
//   { question: "I have no difficulty making decisions that might inconvenience others.", dimension: "T/F", reverseScored: false },
//   { question: "I use logical examination rather than emotional aspects in situations.", dimension: "T/F", reverseScored: false },
//   { question: "Truthfulness matters more to me than safeguarding emotions.", dimension: "T/F", reverseScored: false },
//   { question: "I believe emotions affect judgment significantly.", dimension: "T/F", reverseScored: true },
//   { question: "People's decisions relying exclusively on logic create discomfort in me.", dimension: "T/F", reverseScored: true },
//   { question: "I place individual beliefs above concrete information when deciding.", dimension: "T/F", reverseScored: true },
//   { question: "Logical solutions produce more satisfaction than emotional solutions.", dimension: "T/F", reverseScored: false },

//   { question: "I prefer structure over flexibility in schedules.", dimension: "J/P", reverseScored: false },
//   { question: "Unexpected shifts in plans cause me stress.", dimension: "J/P", reverseScored: false },
//   { question: "Scheduling events and daily lists bring satisfaction.", dimension: "J/P", reverseScored: false },
//   { question: "I prefer finishing one project completely before starting another.", dimension: "J/P", reverseScored: false },
//   { question: "I prefer certainty rather than facing unforeseen incidents.", dimension: "J/P", reverseScored: false },
//   { question: "Unclear resolutions increase my uneasiness.", dimension: "J/P", reverseScored: false },
//   { question: "I work best with a structured routine.", dimension: "J/P", reverseScored: false },
//   { question: "I prefer fast decisions that I rarely change.", dimension: "J/P", reverseScored: false },
//   { question: "I easily change plans upon receiving new information.", dimension: "J/P", reverseScored: true },
//   { question: "I prefer open-ended situations to discover new possibilities.", dimension: "J/P", reverseScored: true },
//   { question: "Working with a time schedule enhances my productivity.", dimension: "J/P", reverseScored: false },
//   { question: "Predictability is more comfortable than uncertainty.", dimension: "J/P", reverseScored: false },
//   { question: "I enjoy long-term planning rather than spontaneous changes.", dimension: "J/P", reverseScored: false },

//   { question: "I feel at ease in crowds but find it harder one-on-one.", dimension: "E/I", reverseScored: false },
// ];

// const seedMBTI = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');

//     await MbtiQuestion.deleteMany({});
//     console.log('Cleared existing MBTI questions');

//     await MbtiQuestion.insertMany(mbtiQuestions);
//     console.log('MBTI questions seeded successfully');

//     mongoose.disconnect();
//   } catch (error) {
//     console.error('Error seeding MBTI questions:', error);
//     process.exit(1);
//   }
// };

// seedMBTI();

// require('dotenv').config();
// const mongoose = require('mongoose');
// const CareerQuestion = require('./models/CareerAptitudePersonalityTest.js'); // Ensure this model is correct

// const careerQuestions = [
//   { question: "Handling numerical data along with statistical information brings me satisfaction.", category: "Analytical Thinker", reverseScored: false },
//   { question: "Conflicts present no challenge to me. I specialize in conflict resolution.", category: "Conflict Resolution & Leadership", reverseScored: false },
//   { question: "Physical work tasks appeal to me more than theoretical assignments do.", category: "Practical & Hands-On", reverseScored: false },
//   { question: "I perform well when needed to address groups publicly.", category: "Communication & Language", reverseScored: false },
//   { question: "I focus intensely on every detail that comes my way.", category: "Analytical Thinker", reverseScored: false },
//   { question: "I possess creativity when solving problems.", category: "Creative & Aesthetic", reverseScored: false },
//   { question: "I enjoy collaborating with others.", category: "Empathy & Social Work", reverseScored: false },
//   { question: "I have demonstrated success in keeping my time under effective control.", category: "Organized & Detail-Oriented", reverseScored: false },
//   { question: "I have the ability to adjust myself successfully in unfamiliar environments.", category: "Stress-Resistant & Adaptive", reverseScored: false },
//   { question: "I have strong writing skills.", category: "Communication & Language", reverseScored: false },
//   { question: "I am proficient with technology.", category: "Technology-Oriented", reverseScored: false },
//   { question: "I enjoy leading projects.", category: "Conflict Resolution & Leadership", reverseScored: false },
//   { question: "I am empathetic towards others.", category: "Empathy & Social Work", reverseScored: false },
//   { question: "I handle stress well.", category: "Stress-Resistant & Adaptive", reverseScored: false },
//   { question: "I am organized in my work.", category: "Organized & Detail-Oriented", reverseScored: false },
//   { question: "I enjoy learning new languages.", category: "Communication & Language", reverseScored: false },
//   { question: "I am mechanically inclined.", category: "Practical & Hands-On", reverseScored: false },
//   { question: "My perception of aesthetic quality is strong.", category: "Creative & Aesthetic", reverseScored: false },
//   { question: "I am persuasive in discussions.", category: "Conflict Resolution & Leadership", reverseScored: false },
//   { question: "I enjoy researching complex topics.", category: "Analytical Thinker", reverseScored: false },
  
//   { question: "Analytical", category: "Analytical Thinker", reverseScored: false },
//   { question: "Creative", category: "Creative & Aesthetic", reverseScored: false },
//   { question: "Practical", category: "Practical & Hands-On", reverseScored: false },
//   { question: "Adventurous", category: "Stress-Resistant & Adaptive", reverseScored: false },
//   { question: "Organized", category: "Organized & Detail-Oriented", reverseScored: false },
//   { question: "Empathetic", category: "Empathy & Social Work", reverseScored: false },
//   { question: "Persuasive", category: "Conflict Resolution & Leadership", reverseScored: false },
//   { question: "Detail-oriented", category: "Analytical Thinker", reverseScored: false },
//   { question: "Independent", category: "Stress-Resistant & Adaptive", reverseScored: false },
//   { question: "Innovative", category: "Technology-Oriented", reverseScored: false }
// ];

// const seedCareerTest = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');

//     await CareerQuestion.deleteMany({});
//     console.log('Cleared existing Career Aptitude questions');

//     await CareerQuestion.insertMany(careerQuestions);
//     console.log('Career Aptitude questions seeded successfully');

//     mongoose.disconnect();
//   } catch (error) {
//     console.error('Error seeding Career Aptitude questions:', error);
//     process.exit(1);
//   }
// };

// seedCareerTest();



// require('dotenv').config();
// const mongoose = require('mongoose');
// const EnneagramQuestion = require('./models/EnneagramPersonalityTest.js'); 

// const enneagramQuestions = [
//   { question: "I choose proper methods to complete tasks regardless of needing additional time.", category: "The Reformer", reverseScored: false },
//   { question: "I become uneasy every time I encounter disorder in my environment.", category: "The Reformer", reverseScored: false },
//   { question: "Self-criticism is a common habit due to my perception of insufficient abilities.", category: "The Loyalist", reverseScored: false },
//   { question: "My approach to life consists of following rules while demanding similar behavior from others.", category: "The Reformer", reverseScored: false },
//   { question: "My greatest sense of happiness emerges when I assist other people.", category: "The Helper", reverseScored: false },
//   { question: "Most of my choices prioritize help for others above what I need.", category: "The Helper", reverseScored: false },
//   { question: "The request for help from others creates a difficult situation because I find it hard to decline their requests.", category: "The Helper", reverseScored: false },
//   { question: "The way I show kindness to others makes me sad when they fail to recognize its value.", category: "The Helper", reverseScored: false },
//   { question: "I dedicate myself to success as well as the respect of others.", category: "The Achiever", reverseScored: false },
//   { question: "Achieving my goals makes me feel highly honored.", category: "The Achiever", reverseScored: false },
//   { question: "My anxiety stems from the apprehension I have about how people perceive me.", category: "The Loyalist", reverseScored: false },
//   { question: "People perceive me as providing the highest level of expertise in my profession.", category: "The Achiever", reverseScored: false },
//   { question: "I frequently notice myself apart from the way most people live their lives.", category: "The Individualist", reverseScored: false },
//   { question: "I experience my emotions with great power and perceptiveness.", category: "The Individualist", reverseScored: false },
//   { question: "My passion is discovering original methods to show myself to the world.", category: "The Individualist", reverseScored: false },
//   { question: "Others have a challenge understanding me on occasion.", category: "The Individualist", reverseScored: false },
//   { question: "I take pleasure in embracing new information along with analyzing situations in depth.", category: "The Investigator", reverseScored: false },
//   { question: "I require personal time for recuperation after spending time with others.", category: "The Investigator", reverseScored: false },
//   { question: "I watch others first before entering into social discussions.", category: "The Investigator", reverseScored: false },
//   { question: "Sharing inner emotions stands as something I avoid with other people.", category: "The Investigator", reverseScored: false },
//   { question: "A disorder of thought directs me toward considering potential failures in different circumstances.", category: "The Loyalist", reverseScored: false },
//   { question: "I need a strategy in place because unexpected situations can occur.", category: "The Loyalist", reverseScored: false },
//   { question: "I seek guidance and support from the reliable people in my life.", category: "The Loyalist", reverseScored: false },
//   { question: "Anxiety builds within me whenever an uncertain situation faces me.", category: "The Loyalist", reverseScored: false },
//   { question: "I always seek out fresh experiences as well as new adventures.", category: "The Enthusiast", reverseScored: false },
//   { question: "My high need for stimulation makes me seek out pleasurable experiences.", category: "The Enthusiast", reverseScored: false },
//   { question: "I choose to concentrate on hopeful things instead of letting problems disturb my thoughts.", category: "The Enthusiast", reverseScored: false },
//   { question: "When needed I defend myself together with defending others.", category: "The Challenger", reverseScored: false },
//   { question: "Others make it difficult for me to handle when they control my actions.", category: "The Challenger", reverseScored: false },
//   { question: "I express my thoughts to people regardless of their disagreement with me.", category: "The Challenger", reverseScored: false },
//   { question: "Independence and personal strength is what I wish to demonstrate.", category: "The Challenger", reverseScored: false },
//   { question: "I make an effort to maintain peaceful relations by staying out of disputes.", category: "The Peacemaker", reverseScored: false },
//   { question: "When others desire to stay clear of disagreements I follow their lead rather than starting an argument.", category: "The Peacemaker", reverseScored: false },
//   { question: "The state of pure happiness comes when all those around me maintain friendly relationships with one another.", category: "The Peacemaker", reverseScored: false },
//   { question: "I avoid dealing with serious as well as negative emotions at times.", category: "The Enthusiast", reverseScored: false }
// ];

// const seedEnneagramTest = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');

//     await EnneagramQuestion.deleteMany({});
//     console.log('Cleared existing Enneagram test questions');

//     await EnneagramQuestion.insertMany(enneagramQuestions);
//     console.log('Enneagram test questions seeded successfully');

//     mongoose.disconnect();
//   } catch (error) {
//     console.error('Error seeding Enneagram test questions:', error);
//     process.exit(1);
//   }
// };

// seedEnneagramTest();


require('dotenv').config();
const mongoose = require('mongoose');
const EmotionalIntelligenceQuestion = require('./models/EmotionalPersonalityTest.js');

const emotionalIntelligenceQuestions = [
  { question: "I am aware of the emotions which surface within me in the moment.", category: "Emotional Awareness", reverseScored: false },
  { question: "I possess knowledge about the reasons behind particular emotional experiences I encounter.", category: "Emotional Awareness", reverseScored: false },
  { question: "My mental state depends on predictable ways that particular life experiences influence it.", category: "Emotional Awareness", reverseScored: false },
  { question: "Throughout the day, I think about my emotions after certain incidents.", category: "Emotional Awareness", reverseScored: false },
  { question: "My feelings directly shape the way I behave.", category: "Emotional Awareness", reverseScored: false },
  { question: "My emotions experience different changes during the hours of the day.", category: "Emotional Awareness", reverseScored: false },
  
  { question: "Observation enables me to understand the emotional state of others.", category: "Empathy", reverseScored: false },
  { question: "My emotions remain alert even though the person remains silent about their negative mood.", category: "Empathy", reverseScored: false },
  { question: "During discussions, I can recognize the emotional states of other people.", category: "Empathy", reverseScored: false },
  { question: "Walking into a room allows me to detect the prevailing atmosphere surrounding me.", category: "Empathy", reverseScored: false },
  { question: "Anyone concealing their emotions reveals their hidden emotions to me.", category: "Empathy", reverseScored: false },
  { question: "My spoken words produce noticeable effects on emotional responses in other people.", category: "Empathy", reverseScored: false },

  { question: "I stay calm under pressure.", category: "Emotional Regulation", reverseScored: false },
  { question: "During situations that cause stress I take steps to control my emotions.", category: "Emotional Regulation", reverseScored: false },
  { question: "I make a point never to express my emotions without careful thought during times of upsetness.", category: "Emotional Regulation", reverseScored: false },
  { question: "I manage to control my emotions while fighting with others.", category: "Emotional Regulation", reverseScored: false },
  { question: "Emotional setbacks do not linger on me for long periods of time.", category: "Emotional Regulation", reverseScored: false },

  { question: "My disposition remains positive throughout all obstacles I encounter.", category: "Social Skills and Relationships", reverseScored: false },
  { question: "The difficult experiences of others generate emotions of empathy within me.", category: "Social Skills and Relationships", reverseScored: false },
  { question: "I easily sympathize with the emotional experiences of other people.", category: "Social Skills and Relationships", reverseScored: false },
  { question: "I understand others' perspectives.", category: "Social Skills and Relationships", reverseScored: false },
  { question: "I provide assistance to troubled individuals.", category: "Social Skills and Relationships", reverseScored: false },
  { question: "Happy feelings overcome me when others reach their accomplishments.", category: "Social Skills and Relationships", reverseScored: false },

  { question: "I am satisfied with everything in my life right now.", category: "Self-Motivation", reverseScored: false },
  { question: "I manage to keep my professional and personal aspects separate.", category: "Self-Motivation", reverseScored: false },
  { question: "I dedicate time to pursue activities, which bring happiness in my life.", category: "Self-Motivation", reverseScored: false },
  { question: "I handle daily stresses effectively.", category: "Self-Motivation", reverseScored: false },
  { question: "I enjoy meaningful connections with other people in my life.", category: "Self-Motivation", reverseScored: false },
  { question: "I perform routine care for my physical wellbeing.", category: "Self-Motivation", reverseScored: false }
];

const seedEmotionalIntelligenceTest = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    await EmotionalIntelligenceQuestion.deleteMany({});
    console.log('Cleared existing EI test questions');

    await EmotionalIntelligenceQuestion.insertMany(emotionalIntelligenceQuestions);
    console.log('EI test questions seeded successfully');

    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding EI test questions:', error);
    process.exit(1);
  }
};

seedEmotionalIntelligenceTest();
