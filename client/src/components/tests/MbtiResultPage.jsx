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
      <div className="bg-blue-600 text-white py-8 text-center">
        <p className="text-3xl font-bold uppercase">
          Your MBTI Personality:{" "}
          <span className="font-bold">{personality}</span>
        </p>
        <p className="text-sm mt-2">{result.strengths}</p>
      </div>

      <div className="max-w-7xl mx-auto p-8 mt-4 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <Pie data={data} />
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold text-gray-900">
            {result.name}
          </h2>
          <p className="text-gray-700">{result.description}</p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Areas for growth
            </h2>
            <p className="text-gray-700">{result.growth}</p>
          </div>
          <button
            className="flex items-center bg-blue-500 text-white px-5 py-2 rounded mt-4"
            onClick={() => navigate("/mbti-test")}
          >
            <FaRedo className="mr-2" /> Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default MbtiResultPage;
