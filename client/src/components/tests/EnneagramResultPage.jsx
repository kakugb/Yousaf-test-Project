import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function EnneagramResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Log the location state to debug
  console.log("Location State: ", location.state);

  // Safely extract values from the state (with fallback for missing data)
  const { totals, personalityType, result } = location.state || {};
  console.log("dd", totals, personalityType);

  // Check if any required data is missing, and if so, return a loading state
  if (!totals || !personalityType || !result) {
    console.log("Required data missing, redirecting...");
    navigate("/EnneagramPersonalityTest"); // Redirect to the test page if the data is incomplete
    return <div>Loading...</div>; // Optionally, display a loading message
  }

  // Check if percentageScores exists in result
  const percentageScores = result?.percentageScores || {}; // Default to empty object if not provided
  console.log("dd", totals);
  console.log("percentageScores:", percentageScores);



  // Define traits and ensure fallback handling for missing percentageScores
  const traits = [
    "The Reformer", "The Helper", "The Achiever", "The Individualist", "The Investigator",
    "The Loyalist", "The Enthusiast", "The Challenger", "The Peacemaker"
  ];

    // If percentageScores is empty, try using `totals` for scores
    const traitScores = traits.map(trait => {
        // Use `totals` if `percentageScores` is empty
        const score = percentageScores[trait] || totals[trait] || 0;
        console.log(`Trait: ${trait}, Score: ${score}`);
        return score;
      });
    
      console.log("traitScores:", traitScores);

  // Ensure that data is correctly formatted for the Pie chart
  const data = {
    labels: traits,
    datasets: [
      {
        data: traitScores, // Using the scores array that includes safe access
        backgroundColor: [
          "#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A855F7", 
          "#6366F1", "#FF7F50", "#FFD700", "#98FB98"
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white py-8 px-4 text-center">
        <p className="text-3xl font-bold uppercase">
          Your Enneagram Personality Type:{" "}
          <span className="font-bold">{personalityType || "Unknown"}</span>
        </p>
        <p className="text-sm text-white mt-2">{result?.focus || "No focus available"}</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-8 mt-4 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        {/* Left: Chart and summary */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Your Dominant Trait: {result?.personalityType}</h2>

          {/* Pie Chart */}
          <div className="w-80 h-80 lg:w-96 lg:h-96 mt-6 lg:mt-0">
            {traitScores.length > 0 && <Pie data={data} />}
          </div>

          <div className="mt-2">
            <h3 className="text-lg font-semibold text-gray-700">Trait Scores</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              {Object.entries(percentageScores).map(([trait, percentage]) => (
                <li key={trait}>
                  <span className="font-bold">{trait}:</span> {percentage?.toFixed(2)}% ({totals[trait]} / 20)
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Explanations */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">What does this mean?</h3>
         
            <div className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-300">
              <p className="text-gray-700 text-sm mt-1">{result?.description}</p>
            </div>

          <button
            className="flex items-center bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
            onClick={() => navigate("/EnneagramPersonalityTest")}
          >
            <FaRedo className="mr-2" /> Retake Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnneagramResultPage;
