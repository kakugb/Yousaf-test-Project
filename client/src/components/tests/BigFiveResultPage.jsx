import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRedo } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const BigFiveResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if state exists before using it
  if (!location.state || !location.state.totals || !location.state.percentageScores) {
    navigate("/bigfive-test");
    return null;
  }

  const { totals, percentageScores, results, dominantTrait } = location.state;

  // Prepare data for the Pie chart
  const data = {
    labels: [
      "E (Extraversion)",
      "O (Openness)",
      "A (Agreeableness)",
      "C (Conscientiousness)",
      "N (Neuroticism)",
    ],
    datasets: [
      {
        data: [percentageScores.E, percentageScores.O, percentageScores.A, percentageScores.C, percentageScores.N],
        backgroundColor: ["#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A855F7"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white py-8 px-4 text-center">
        <p className="text-3xl font-bold uppercase">
          Your Big Five Personality Result:{" "}
          <span className="font-bold">{results[dominantTrait]?.name || "Unknown"}</span>
        </p>
        <p className="text-sm text-white mt-2">{results[dominantTrait]?.description || "No description available"}</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-8 mt-4 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        {/* Left: Chart and summary */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Your Dominant Trait: {dominantTrait}</h2>

          <div className="w-64 h-64 relative mb-6">
            <Pie key={JSON.stringify(data)} data={data} />
          </div>

          <div className="mt-2">
            <h3 className="text-lg font-semibold text-gray-700">Trait Scores</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              {Object.entries(percentageScores).map(([trait, percentage]) => (
                <li key={trait}>
                  <span className="font-bold">{trait}:</span> {percentage.toFixed(2)}% ({totals[trait]} / 20)
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Explanations */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">What does this mean?</h3>
          {Object.entries(results).map(([trait, details]) => (
            <div key={trait} className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800">{details.name}</h4>
              <p className="text-gray-700 text-sm mt-1">{details.description}</p>
            </div>
          ))}

          <button
            className="flex items-center bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
            onClick={() => navigate("/bigfive-test")}
          >
            <FaRedo className="mr-2" /> Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigFiveResultPage;
