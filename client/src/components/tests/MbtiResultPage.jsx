import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRedo } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const MbtiResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.totals || !state.personality || !state.result) {
    navigate("/mbti-test");
    return null;
  }

  const { totals, personality, result } = state;

  // Prepare data for the Pie chart
  const data = {
    labels: ["E/I", "S/N", "T/F", "J/P"],
    datasets: [
      {
        data: [totals["E/I"], totals["S/N"], totals["T/F"], totals["J/P"]],
        backgroundColor: ["#F87171", "#60A5FA", "#34D399", "#FBBF24"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-10 text-center shadow-md rounded-b-xl">
        <p className="text-4xl font-extrabold uppercase">
          Your MBTI Personality:{" "}
          <span className="text-yellow-300">{personality}</span>
        </p>
        <p className="text-lg mt-3 font-medium">{result.strengths}</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8 mt-8 bg-white rounded-xl shadow-lg flex flex-col lg:flex-row">
        {/* Left Side: Chart & Scores */}
        <div className="w-full lg:w-1/2 flex flex-col items-center p-6 border-r border-gray-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Your Trait Scores</h2>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            {/* Displaying Scores */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-60">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Scores</h3>
              <ul className="space-y-2 text-gray-600">
                {Object.entries(totals).map(([trait, score]) => (
                  <li key={trait} className="text-md">
                    <span className="font-bold">{trait}:</span> {score} / 20
                  </li>
                ))}
              </ul>
            </div>

            {/* Chart */}
            <div className="w-64 h-64 mt-6 lg:mt-0">
              <Pie data={data} />
            </div>
          </div>
        </div>

        {/* Right Side: Personality Insights */}
        <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0 flex flex-col">
          <h2 className="text-3xl font-bold text-blue-700">{result.name}</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">{result.description}</p>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-300 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700">Areas for Growth</h3>
            <p className="text-gray-700 mt-1">{result.growth}</p>
          </div>

          <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-300 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700">Strengths</h3>
            <p className="text-gray-700 mt-1">{result.strengths}</p>
          </div>

          {/* Retake Button */}
          <button
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full mt-8 hover:shadow-md transition duration-300"
            onClick={() => navigate("/mbti-test")}
          >
            <FaRedo className="mr-3" /> Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default MbtiResultPage;
