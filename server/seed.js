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
//   { question: "Spending time within large social environments produces a feeling of energy for me.", dimension: "E" },
//   { question: "I regularly begin discussions with unknown people.", dimension: "E" },
//   { question: "I would rather join group activities instead of spending periods by myself.", dimension: "E" },
//   { question: "I experience little trouble when I need to express my thoughts to others in group discussions.", dimension: "E" },
//   { question: "The switch to solitude restores my energy levels after spending time with others.", dimension: "E" },
//   { question: "My instinctual reactions are more important to me than using logical thinking.", dimension: "O" },
//   { question: "Abstract discussions interest me more than solving practical problems.", dimension: "O" },
//   { question: "My pattern recognition skills enable me to find hidden connections, which usually escape others.", dimension: "O" },
//   { question: "When making decisions I usually depend on firsthand realities instead of abstract academic information.", dimension: "O" },
//   { question: "Most of the time I notice present-day information instead of future prospects.", dimension: "O" },
//   { question: "My choice of making decisions relies on logical thinking instead of emotional responses.", dimension: "A" },
//   { question: "Making choices proves challenging whenever I need to consider the feelings of people involved.", dimension: "A" },
//   { question: "A just world system matters to me above the maintenance of intimate connections.", dimension: "A" },
//   { question: "When evaluating situations I trust in information above my personal experiences.", dimension: "A" },
//   { question: "The capability of showing empathy stands higher than effective decision-making in my opinion for individuals who lead groups.", dimension: "A" },
//   { question: "Having foresight over most decisions leads me to prefer advanced planning to spontaneous action.", dimension: "C" },
//   { question: "A situation becomes discomforting to me whenever there exists no organizational pattern or direction.", dimension: "C" },
//   { question: "The chance of new possibilities leads me to switch plans minutes before execution.", dimension: "C" },
//   { question: "The flow of events makes me happy since I avoid rigid schedules.", dimension: "C" },
//   { question: "The clearest steps that I follow lead me to perform at my best.", dimension: "C" },
//   { question: "After making a decision I do not tend to question my choices.", dimension: "N" },
//   { question: "I surrender myself to constant worry about former contacts together with past decisions.", dimension: "N" },
//   { question: "Criticism positively affects me because I do not internalize it as personal feedback.", dimension: "N" },
//   { question: "My worries focus heavily on my appearance in the eyes of others.", dimension: "N" },
//   { question: "Stressful conditions fail to faze me while my ability to adjust to changing circumstances remains excellent.", dimension: "N" }
// ];

// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB Atlas');

//     // Clear existing Big Five questions (use with caution)
//     await BigFiveQuestion.deleteMany({});
//     console.log('Cleared existing Big Five questions');

//     // Insert the questions
//     await BigFiveQuestion.insertMany(BigFivePersonality);
//     console.log('Seeded Big Five questions successfully');
//     process.exit();
//   } catch (error) {
//     console.error('Error seeding the database:', error);
//     process.exit(1);
//   }
// };

// seedDB();



// require('dotenv').config();
// const mongoose = require('mongoose');
// const MbtiQuestion = require('./models/MbtiPersonalityTest.js');

// const mbtiQuestions = [
//   { question: "Going out with a lot of individuals makes me feel active and passionate.", dimension: "E/I" },
//   { question: "I take pleasure in introducing myself to new individuals first.", dimension: "E/I" },
//   { question: "My preference is to spend my free time with others rather than being by myself.", dimension: "E/I" },
//   { question: "The expression of my thoughts and feelings remains simple when sharing them with others in group settings.", dimension: "E/I" },
//   { question: "The interactive environments at a quick pace make me feel most comfortable.", dimension: "E/I" },
//   { question: "I speak about my thoughts prematurely even though I have not fully formed them mentally.", dimension: "E/I" },
//   { question: "My work style includes teamwork instead of working alone.", dimension: "E/I" },
//   { question: "The presence of others around me brings me a pleasant vibe although I refrain from talking to anyone.", dimension: "E/I" },
//   { question: "My habit is to start speaking without fully preparing my thoughts.", dimension: "E/I" },
//   { question: "Social interactions become exhausting when they extend for an extended period.", dimension: "E/I" },
//   { question: "My habit is to depend on real-world applications instead of mathematical concepts.", dimension: "S/N" },
//   { question: "My thoughts concentrate mainly on particular elements rather than broader concepts.", dimension: "S/N" },
//   { question: "When making decisions I choose information from observation over instinct.", dimension: "S/N" },
//   { question: "The structured method of problem-solving brings me satisfaction.", dimension: "S/N" },
//   { question: "Real-world events fascinate me more than theoretical possibilities.", dimension: "S/N" },
//   { question: "I trust familiar solutions instead of exploring new options.", dimension: "S/N" },
//   { question: "Information from my past comes through clear details instead of emotional impressions.", dimension: "S/N" },
//   { question: "I prefer tasks with specific instructions rather than open-ended ones.", dimension: "S/N" },
//   { question: "My attention stays focused on potential opportunities of tomorrow rather than the present.", dimension: "S/N" },
//   { question: "I prefer generating new solutions, even if they may not have practical applications.", dimension: "S/N" },
//   { question: "I make decisions based on rational thinking rather than personal emotions.", dimension: "T/F" },
//   { question: "Fairness requires uniform standards across all individuals.", dimension: "T/F" },
//   { question: "Competence holds more value than kindness in interactions.", dimension: "T/F" },
//   { question: "Efficiency is more important than harmony in relationships.", dimension: "T/F" },
//   { question: "I have no difficulty making decisions that might inconvenience others.", dimension: "T/F" },
//   { question: "I use logical examination rather than emotional aspects in situations.", dimension: "T/F" },
//   { question: "Truthfulness matters more to me than safeguarding emotions.", dimension: "T/F" },
//   { question: "I believe emotions affect judgment significantly.", dimension: "T/F" },
//   { question: "People's decisions relying exclusively on logic create discomfort in me.", dimension: "T/F" },
//   { question: "I place individual beliefs above concrete information when deciding.", dimension: "T/F" },
//   { question: "I prefer structure rather than spontaneity.", dimension: "J/P" },
//   { question: "Unexpected shifts in plans cause stress.", dimension: "J/P" },
//   { question: "Scheduling and creating daily lists brings satisfaction.", dimension: "J/P" },
//   { question: "I prefer finishing one project before starting another.", dimension: "J/P" },
//   { question: "I prefer certainty over unforeseen incidents.", dimension: "J/P" },
//   { question: "Unclear resolutions increase my uneasiness.", dimension: "J/P" },
//   { question: "Routine produces my most productive results.", dimension: "J/P" },
//   { question: "I make fast decisions and maintain them without changes.", dimension: "J/P" },
//   { question: "I can easily change plans when receiving fresh information.", dimension: "J/P" },
//   { question: "I prefer maintaining open-ended situations to discover new possibilities.", dimension: "J/P" },
//   { question: "Discussions about fresh concepts interest me more than ordinary matters.", dimension: "S/N" },
//   { question: "A prepared time schedule enables my best productivity.", dimension: "J/P" },
//   { question: "Intellectual exchanges appeal more than emotional communication.", dimension: "T/F" },
//   { question: "Predictability provides more comfort than impermanence.", dimension: "J/P" },
//   { question: "I prefer discovering underlying mechanisms instead of accepting things without investigation.", dimension: "S/N" },
//   { question: "I feel at ease in crowds but find it harder one-on-one.", dimension: "E/I" },
//   { question: "Logical solutions produce more satisfaction than emotional solutions.", dimension: "T/F" },
//   { question: "I prefer extended planning rather than accepting spontaneous changes.", dimension: "J/P" },
//   { question: "My attention typically focuses on future alternatives rather than present situations.", dimension: "S/N" },
//   { question: "Creative tasks appeal to me more than traditional problem-solving methods.", dimension: "S/N" }
// ];

// const seedMBTI = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB');

//     await MbtiQuestion.deleteMany({});
//     console.log('Cleared existing MBTI questions');

//     await MbtiQuestion.insertMany(mbtiQuestions);
//     console.log('Seeded MBTI questions successfully');
//     process.exit();
//   } catch (error) {
//     console.error('Error seeding MBTI questions:', error);
//     process.exit(1);
//   }
// };

// seedMBTI();
