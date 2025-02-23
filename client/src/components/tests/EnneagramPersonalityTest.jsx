import React, { useState } from "react";

const questions = [
  "I strive for perfection",
  "I work hard to be helpful to others",
  "It is important to me that other people like me",
  "I always finish my chores",
  "I am highly organized",
  "I enjoy new challenges",
  "I stay calm under pressure",
  "I am detail-oriented",
  "I value honesty in others",
  "I am a team player",
  "I take responsibility for my actions"
];

const QUESTIONS_PER_PAGE = 5;

const EnneagramPersonalityTest = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
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
          .slice(currentPage * QUESTIONS_PER_PAGE, (currentPage + 1) * QUESTIONS_PER_PAGE)
          .map((question, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-900 text-center">{question}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <span className="text-gray-500">Inaccurate</span>
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`question-${index + currentPage * QUESTIONS_PER_PAGE}`}
                    className="w-5 h-5 accent-green-700"
                  />
                ))}
                <span className="text-gray-500">Accurate</span>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-700">Step {currentPage + 1} of {totalPages}</p>
        <div className="flex space-x-1 my-2">
          {[...Array(totalPages)].map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${currentPage === i ? 'bg-red-600' : 'bg-orange-300'}`}></span>
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
        </div>
      </div>
    </div>
  );
};



export default EnneagramPersonalityTest;