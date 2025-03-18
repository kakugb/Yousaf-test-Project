// controllers/careerAptitudeController.js
const CareerAptitudeQuestion = require('../models/CareerAptitudePersonalityTest.js');

const careerTypes = {
  "Analytical Thinker": {
    details: "(Mathematics, Research, Data Science)",
    recommendations: 'Data Analyst, Statistician, Research Scientist, Actuary, Financial Analyst',
    description: 'Analytical thinkers excel at working with numbers, identifying patterns, and solving complex problems. Careers in data science and research require strong mathematical skills and logical reasoning. If you enjoy analyzing trends, working with statistics, or making data-driven decisions, fields like finance, market research, and actuarial science may be ideal for you.'
  },
  "Conflict Resolution & Leadership": {
    details: "(Management, Human Resources, Public Relations)",
    recommendations: 'Human Resources Manager, Public Relations Specialist, Corporate Trainer, Business Consultant',
    description: 'If you have strong interpersonal skills and enjoy leading teams or resolving conflicts, a career in management or human resources may be a good fit. Leaders play a key role in guiding organizations, mediating disputes, and improving workplace efficiency. Public relations specialists also require excellent communication skills to maintain a company’s reputation and handle crises effectively.'
  },
  "Practical & Hands-On": {
    details: "(Engineering, Technical Work, Construction)",
    recommendations: 'Engineer, Technician, Construction Manager, Mechanic, Architect',
    description: 'Practical and hands-on individuals enjoy working in fields where they can apply their technical skills to solve real-world problems. Engineering and construction careers require problem-solving abilities, logical thinking, and attention to detail. These fields offer diverse opportunities, from designing buildings to working with machinery or electrical systems.'
  },
  "Communication & Language": {
    details: "(Journalism, Writing, Translation)",
    recommendations: 'Journalist, Writer, Editor, Translator, Language Teacher',
    description: 'Strong communication skills are essential in careers that involve writing, editing, and public speaking. Journalists report news and conduct interviews, while writers and editors create content for various media. Translators and language teachers also play a crucial role in bridging language barriers. If you enjoy storytelling, research, and language, these careers may be a great fit.'
  },
  "Technology-Oriented": {
    details: "(IT, Software Development, Cybersecurity)",
    recommendations: 'Software Developer, IT Specialist, Cybersecurity Expert, Systems Analyst',
    description: 'Technology careers are ideal for individuals who enjoy working with computers, coding, and solving technical problems. Software developers create applications and programs, while IT specialists maintain and improve computer systems. Cybersecurity experts protect organizations from cyber threats, and systems analysts work to optimize business technology. The tech industry offers high salaries and continuous innovation, making it a lucrative career path.'
  },
  "Organized & Detail-Oriented": {
    details: "(Administration, Project Management, Accounting)",
    recommendations: 'Project Manager, Accountant, Auditor, Administrative Professional',
    description: 'If you have strong organizational skills and enjoy planning, administration, or working with numbers, a career in project management, accounting, or auditing may be suitable for you. These careers require attention to detail, efficiency, and the ability to manage budgets or workflows effectively.'
  },
  "Empathy & Social Work": {
    details: "(Psychology, Counseling, Healthcare)",
    recommendations: 'Psychologist, Counselor, Social Worker, Nurse, Healthcare Professional',
    description: 'People who are compassionate and have strong emotional intelligence excel in social work, psychology, and healthcare careers. Psychologists and counselors provide mental health support, social workers assist individuals in need, and healthcare professionals care for patients. These fields require strong listening skills, patience, and a desire to help others.'
  },
  "Adventurous": {
    details: "(Military, Law Enforcement, Entrepreneurship)",
    recommendations: 'Entrepreneur, Military Officer, Police Officer, Firefighter, Adventure Guide',
    description: 'Careers that require resilience, adaptability, and the ability to handle high-pressure situations are well-suited for individuals who thrive in dynamic environments. Entrepreneurs take risks to start businesses, while military officers and police officers protect and serve their communities. Firefighters and adventure guides also work in unpredictable, high-stakes situations that require courage and quick decision-making.'
  }
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
    "Analytical Thinker": 0,
    "Conflict Resolution & Leadership": 0,
    "Practical & Hands-On": 0,
    "Communication & Language": 0,
    "Technology-Oriented": 0,
    "Organized & Detail-Oriented": 0,
    "Empathy & Social Work": 0,
    "Creative & Aesthetic": 0,
    "Stress-Resistant & Adaptive": 0 
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
