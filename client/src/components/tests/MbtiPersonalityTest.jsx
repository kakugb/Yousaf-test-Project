import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QUESTIONS_PER_PAGE = 10;

const MbtiPersonalityTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false); // State to show survey

  // Survey form state
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
      .get("http://localhost:3000/api/mbti/questions")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching MBTI questions:", error);
      });
  }, []);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE) + 1; // +1 for survey page

  const sizes = ["w-10 h-10", "w-8 h-8", "w-6 h-6", "w-8 h-8", "w-10 h-10"];
  const accents = [
    "accent-red-500",
    "accent-blue-500",
    "accent-green-500",
    "accent-yellow-500",
    "accent-purple-500",
  ];

  const handleNext = () => {
    if (currentPage < totalPages - 2) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowSurvey(true); // Show survey after last MBTI question page
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
        ? [...prev.genres, value]
        : prev.genres.filter((genre) => genre !== value),
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const payload = {
      answers: Object.entries(answers).map(([questionId, score]) => ({
        questionId,
        score,
      })),
      survey: surveyAnswers, // Include survey data in final submission
    };

    setIsSubmitting(true);

    axios
      .post("http://localhost:3000/api/mbti/submit", payload)
      .then((response) => {
        setIsSubmitting(false);
        const result = response.data;
        navigate("/mbti-result", { state: result });
      })
      .catch((error) => {
        console.error("Error submitting test:", error);
        setIsSubmitting(false);
        alert("There was an error submitting your test.");
      });
  };

  if (isSubmitting) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Processing your result...</p>
      </div>
    );
  }

  // Show the survey page when all MBTI questions are answered
  if (showSurvey) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-[#f7f1eb] shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          MEDIA PREFERENCES SURVEY
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          We are currently researching how your personality traits may relate to
          your media and entertainment preferences. If you would like to
          participate, please answer the questions below.
        </p>
        <p className="text-gray-600 text-sm mb-6 italic">
          The questions on this page are optional and your answers do not change
          your personality test results.
        </p>

        <label className="block font-semibold mt-4">
          How often do you read books?
        </label>
        <select
          name="booksFrequency"
          className="w-full p-2 border rounded bg-white"
          onChange={handleChange}
        >
          <option value="">No answer</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
          <option value="Never">Never</option>
        </select>

        <label className="block font-semibold mt-4">
          How often do you watch movies?
        </label>
        <select
          name="moviesFrequency"
          className="w-full p-2 border rounded bg-white"
          onChange={handleChange}
        >
          <option value="">No answer</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
          <option value="Never">Never</option>
        </select>

        <label className="block font-semibold mt-4">
          What is your favorite movie that you watched in 2024?
        </label>
        <input
          type="text"
          name="favoriteMovie"
          className="w-full p-2 border rounded bg-white"
          onChange={handleChange}
        />

        <label className="block font-semibold mt-4">
          What is your favorite book that you read in 2024?
        </label>
        <input
          type="text"
          name="favoriteBook"
          className="w-full p-2 border rounded bg-white"
          onChange={handleChange}
        />

        <label className="block font-semibold mt-4">
          In general, what genres do you prefer? Select all that apply.
        </label>
        <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-md border">
          {[
            "Action",
            "Comedy",
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Romance",
            "Sci-Fi",
            "Non-Fiction",
            "Other",
          ].map((genre) => (
            <label key={genre} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={genre}
                onChange={handleGenreChange}
                className="w-4 h-4 accent-blue-500"
              />
              <span>{genre}</span>
            </label>
          ))}
        </div>

        <label className="block font-semibold mt-4">What is your age?</label>
        <select
          name="age"
          className="w-full p-2 border rounded bg-white"
          onChange={handleChange}
        >
          <option value="">No answer</option>
          <option value="Under 18">Under 18</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55+">55+</option>
        </select>

        <label className="block font-semibold mt-4">What is your gender?</label>
        <select
          name="gender"
          className="w-full p-2 border rounded bg-white"
          onChange={handleChange}
        >
          <option value="">No answer</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen">
      <div className="bg-blue-600 text-white text-center py-3 font-bold uppercase">
        <span className="px-4">Strongly Disagree</span>
        <span className="px-4">• Neutral •</span>
        <span className="px-4">Strongly Agree</span>
      </div>

      {questions
        .slice(
          currentPage * QUESTIONS_PER_PAGE,
          (currentPage + 1) * QUESTIONS_PER_PAGE
        )
        .map((question) => (
          <div
            key={question._id}
            className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50"
          >
            <p className="text-lg font-semibold text-gray-900 text-center">
              {question.question}
            </p>
            <div className="flex justify-center mt-4 space-x-4 items-center">
              <span className="text-gray-500">Strongly Disagree</span>
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name={`question-${question._id}`}
                  value={i}
                  checked={answers[question._id] === i}
                  onChange={(e) =>
                    handleChange(question._id, parseInt(e.target.value))
                  }
                  className={`${sizes[i]} ${accents[i]}`}
                />
              ))}
              <span className="text-gray-500">Strongly Agree</span>
            </div>
          </div>
        ))}
      <p className="text-gray-700 text-center my-4">
        Step {currentPage + 1} of {totalPages}
      </p>
      <div className="grid grid-cols-1 gap-y-4 mt-6 space-x-4">
        <button
          className="w-1/3  mx-auto text-blue-600 px-4 py-2 border"
          onClick={handleNext}
        >
          {currentPage === totalPages - 2 ? "Proceed to Survey" : "Next Step >"}
        </button>
        <button>
          {currentPage > 0 && (
            <button
              className="text-blue-600 px-4 py-2 border"
              onClick={handlePrev}
            >
              &lt; Previous Step
            </button>
          )}
        </button>
      </div>
    </div>
  );
};

export default MbtiPersonalityTest;
