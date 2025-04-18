import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QUESTIONS_PER_PAGE = 10;

const CareerAptitudePersonalityTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);

  const [surveyAnswers, setSurveyAnswers] = useState({
    booksFrequency: "",
    moviesFrequency: "",
    favoriteMovie: "",
    favoriteBook: "",
    genres: [],
    age: "",
    gender: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/careeraptitude/questions")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching Career Aptitude questions:", error);
      });
  }, []);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowSurvey(true);
    }
  };

  const handlePrev = () => {
    if (showSurvey) {
      setShowSurvey(false);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSurveyChange = (event) => {
    const { name, value } = event.target;
    setSurveyAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    setSurveyAnswers((prev) => ({
      ...prev,
      genres: checked
        ? [...new Set([...prev.genres, value])]
        : prev.genres.filter((genre) => genre !== value),
    }));
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.filter((q) => !(q._id in answers));
    if (unansweredQuestions.length > 0) {
      alert(`Please answer all ${unansweredQuestions.length} unanswered questions before submitting.`);
      return;
    }

    const payload = {
      answers: questions
        .map((q) => ({
          questionId: String(q._id),
          score: answers[q._id] ?? 0,
        }))
        .filter((ans) => ans.score !== null),

      survey: {
        ...surveyAnswers,
        genres: [...new Set(surveyAnswers.genres)],
      },
    };

    setIsSubmitting(true);

    axios
      .post("http://localhost:3000/api/careeraptitude/submit", payload)
      .then((response) => {
        console.log("Submission successful:", response.data);
        setIsSubmitting(false);
        navigate("/career-aptitude-result", { state: response.data });
      })
      .catch((error) => {
        console.error("Error submitting test:", error.response ? error.response.data : error.message);
        setIsSubmitting(false);
        alert(`Submission failed: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
      });
  };

  if (isSubmitting) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Processing your result...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen">
      {!showSurvey ? (
        <>
          <div className="bg-blue-600 text-white text-center py-3 font-bold uppercase">
            <span className="px-4">Strongly Disagree</span>
            <span className="px-4">• Neutral •</span>
            <span className="px-4">Strongly Agree</span>
          </div>

          {questions
            .slice(currentPage * QUESTIONS_PER_PAGE, (currentPage + 1) * QUESTIONS_PER_PAGE)
            .map((question) => (
              <div key={question._id} className="bg-white p-6 rounded-lg shadow-md mb-4">
                <p className="text-lg font-semibold">{question.question}</p>
                <p className="text-sm text-gray-500">{question.category}</p>
                <p className="text-sm text-gray-500">{question.details}</p> {/* Category details here */}
                <div className="flex justify-center mt-4 space-x-4">
                  <span className="text-gray-500">Strongly Disagree</span>
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`question-${question._id}`}
                      value={i}
                      checked={answers[question._id] === i}
                      onChange={(e) => handleChange(question._id, parseInt(e.target.value))}
                      className="w-6 h-6"
                    />
                  ))}
                  <span className="text-gray-500">Strongly Agree</span>
                </div>
              </div>
            ))}

          <p className="text-gray-700 text-center my-4">
            Step {currentPage + 1} of {totalPages}
          </p>

          <div className="flex justify-between mt-6">
            {currentPage > 0 && (
              <button className="px-4 py-2 border text-blue-600" onClick={handlePrev}>
                &lt; Previous Step
              </button>
            )}

            <button className="px-4 py-2 border text-blue-600" onClick={handleNext}>
              {currentPage === totalPages - 1 ? "Proceed to Survey" : "Next Step >"}
            </button>
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto p-6 bg-[#f7f1eb] shadow-md rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">MEDIA PREFERENCES SURVEY</h2>
          <label className="block font-semibold mt-4">How often do you read books?</label>
          <select name="booksFrequency" className="w-full p-2 border rounded bg-white" onChange={handleSurveyChange}>
            <option value="">No answer</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>

          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 border text-blue-600" onClick={handlePrev}>
              &lt; Previous Step
            </button>

            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition" onClick={handleSubmit}>
              Submit Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerAptitudePersonalityTest;
