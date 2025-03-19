import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QUESTIONS_PER_PAGE = 10;

const EnneagramPersonalityTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  // Fetch Enneagram questions
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/enneagram/questions")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  const sizes = ["w-10 h-10", "w-8 h-8", "w-6 h-6", "w-8 h-8", "w-10 h-10"];
  const accents = [
    "accent-red-500",
    "accent-blue-500",
    "accent-green-500",
    "accent-yellow-500",
    "accent-purple-500",
  ];

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const payload = {
      answers: Object.entries(answers).map(([questionId, score]) => ({
        questionId,
        score,
      })),
    };

    setIsSubmitting(true);
console.log("Payload:", payload);
    axios
      .post("http://localhost:3000/api/enneagram/submit", payload)
      .then((response) => {
        setIsSubmitting(false);
        const result = response.data;
        console.log("Result:", result);
        navigate("/enneagram-result", { state: result });

      })
      .catch((error) => {
        console.error("Error submitting test:", error);
        console.log(error.response);
        setIsSubmitting(false);
        alert("There was an error submitting your test.");
      });
  };

  if (isSubmitting) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="loader mb-4">
            <svg
              className="animate-spin h-10 w-10 text-blue-500 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
          <p className="text-xl font-semibold">
            Calculating your result, please wait...
          </p>
        </div>
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

      <div className="mt-6 space-y-6">
        {questions
          .slice(
            currentPage * QUESTIONS_PER_PAGE,
            (currentPage + 1) * QUESTIONS_PER_PAGE
          )
          .map((question) => (
            <div
              key={question._id}
              className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 hover:shadow-gray-400 transform transition duration-300 hover:-translate-y-2 hover:scale-105"
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
      </div>

      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-700">
          Step {currentPage + 1} of {totalPages}
        </p>
        <div className="flex space-x-1 my-2">
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                currentPage === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          {currentPage < totalPages - 1 && (
            <button className="border px-4 py-2" onClick={handleNext}>
              Next Step &gt;
            </button>
          )}
          {currentPage > 0 && (
            <button className="text-blue-600" onClick={handlePrev}>
              &lt; Previous Step
            </button>
          )}
          {currentPage === totalPages - 1 && (
            <button className="border px-4 py-2" onClick={handleSubmit}>
              Submit Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnneagramPersonalityTest;
