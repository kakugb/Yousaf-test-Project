import React, { useState, useEffect } from "react";
import axios from "axios";

const QUESTIONS_PER_PAGE = 10;

const DISCPersonalityTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // Answers keyed by question _id, with the selected score (1-5)
  const [answers, setAnswers] = useState({});

  // Fetch questions from your API when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/questions")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  // Define sizes and accent color classes for each of the 5 radio buttons
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

  // Save answer for a given question using its _id
  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Submit test answers to your backend API
  const handleSubmit = () => {
    // Check that all questions are answered
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Prepare payload as an array of { questionId, score } objects
    const payload = {
      answers: Object.entries(answers).map(([questionId, score]) => ({
        questionId,
        score,
      })),
    };

    axios
      .post("http://localhost:3000/api/submit", payload)
      .then((response) => {
        const data = response.data;
        alert(
          `Your dominant personality dimension is: ${data.dominantDimension}\nTotals: ${JSON.stringify(
            data.totals
          )}`
        );
      })
      .catch((error) => {
        console.error("Error submitting test:", error);
        alert("There was an error submitting your test.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-yellow-600 text-white text-center py-3 font-bold uppercase">
        <span className="px-4">Inaccurate</span>
        <span className="px-4">• Neutral •</span>
        <span className="px-4">Accurate</span>
      </div>

      <div className="mt-6 space-y-6">
        {questions
          .slice(
            currentPage * QUESTIONS_PER_PAGE,
            (currentPage + 1) * QUESTIONS_PER_PAGE
          )
          .map((question, index) => (
            <div key={question._id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-900 text-center">
                {question.question}
              </p>
              <div className="flex justify-center mt-4 space-x-4 items-center">
                <span className="text-gray-500">Inaccurate</span>
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`question-${question._id}`}
                    value={i + 1}
                    checked={answers[question._id] === i + 1}
                    onChange={(e) =>
                      handleChange(question._id, parseInt(e.target.value))
                    }
                    className={`${sizes[i]} ${accents[i]}`}
                  />
                ))}
                <span className="text-gray-500">Accurate</span>
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
                currentPage === i ? "bg-red-600" : "bg-orange-300"
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
            <button className="text-red-600" onClick={handlePrev}>
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

export default DISCPersonalityTest;
