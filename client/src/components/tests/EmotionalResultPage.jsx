import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function EmotionalResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Log the location state to debug
  console.log("Location State: ", location.state);

  // Safely extract values from the state (with fallback for missing data)
  const { totals, personalityType, result } = location.state || {};
  console.log("Result:", totals, personalityType, result);

  // Check if any required data is missing, and if so, return a loading state
  if (!totals || !personalityType || !result) {
    console.log("Required data missing, redirecting...");
    navigate("/EmotionalPersonalityTest"); // Redirect to the test page if the data is incomplete
    return <div>Loading...</div>; // Optionally, display a loading message
  }

  // Define traits and ensure fallback handling for missing percentageScores
  const traits = [
    "Emotional Awareness", "Empathy", "Emotional Regulation", "Social Skills and Relationships", "Self-Motivation"
  ];

  const traitScores = traits.map(trait => {
    const score = totals[trait] || 0;
    console.log(`Trait: ${trait}, Score: ${score}`);
    return score;
  });

  // Pie chart data
  const data = {
    labels: traits,
    datasets: [
      {
        data: traitScores,
        backgroundColor: [
          "#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A855F7"
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="bg-blue-600 text-white py-8 px-4 text-center">
        <p className="text-3xl font-bold uppercase">
          Your Emotional Intelligence Personality Type:{" "}
          <span className="font-bold">{personalityType || "Unknown"}</span>
        </p>
        <p className="text-sm text-white mt-2">{result?.focus || "No focus available"}</p>
      </div>

      <div className="max-w-5xl mx-auto p-8 mt-4 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Your Dominant Trait: {result?.personalityType}</h2>
          <div className="w-80 h-80 lg:w-96 lg:h-96 mt-6 lg:mt-0">
            {traitScores.length > 0 && <Pie data={data} />}
          </div>

          <div className="mt-2">
            <h3 className="text-lg font-semibold text-gray-700">Trait Scores</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              {Object.entries(totals).map(([trait, score]) => (
                <li key={trait}>
                  <span className="font-bold">{trait}:</span> {score}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">What does this mean?</h3>
          <div className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-300">
            <p className="text-gray-700 text-sm mt-1">{result?.description}</p>
          </div>

          <button
            className="flex items-center bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
            onClick={() => navigate("/EmotionalPersonalityTest")}
          >
            <FaRedo className="mr-2" /> Retake Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmotionalResultPage;
