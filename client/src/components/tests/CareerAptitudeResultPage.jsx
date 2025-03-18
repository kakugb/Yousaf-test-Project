import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRedo } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CareerAptitudeResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Use effect to navigate after the component is mounted
  useEffect(() => {
    if (!state || !state.totals || !state.result) {
      navigate("/CareerAptitudePersonalitytest"); // Navigate only when there is an issue
    }
  }, [state, navigate]);

  if (!state || !state.totals || !state.result) {
    return null; // Return nothing while navigating
  }

  const { totals, result, highestCategory } = state;

  // Prepare data for the Pie chart
  const data = {
    labels: [
      "Analytical", "Creative", "Leadership", "Technical", 
      "Organized", "Empathy", "Practical", "Communication", 
      "Adventurous", "Persuasive"
    ], // Labels for the Pie chart
    datasets: [
      {
        data: [
          totals["Analytical Thinker"],
          totals["Creative & Aesthetic"],
          totals["Conflict Resolution & Leadership"],
          totals["Technology-Oriented"],
          totals["Organized & Detail-Oriented"],
          totals["Empathy & Social Work"],
          totals["Practical & Hands-On"],
          totals["Communication & Language"],
          totals["Adventurous"],
          totals["Persuasive"]
        ], // Passing the corresponding scores for each trait
        backgroundColor: [
          "#F87171", "#60A5FA", "#34D399", "#FBBF24", 
          "#7C3AED", "#10B981", "#F97316", "#4B5563", 
          "#F59E0B", "#D1D5DB"
        ], // Different colors for the traits
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-10 text-center shadow-md rounded-b-xl">
        <p className="text-4xl font-extrabold uppercase">Your Career Aptitude Result: {highestCategory}</p>
        <p className="text-lg mt-3 font-medium">{result.recommendations}</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8 mt-8 bg-white rounded-xl shadow-lg flex flex-col lg:flex-row gap-8">
        {/* Left Side: Chart */}
        <div className="w-full lg:w-1/2 flex flex-col items-center p-6 border-r border-gray-300 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Your Trait Scores</h2>

          {/* Pie Chart */}
          <div className="w-80 h-80 lg:w-96 lg:h-96 mt-6 lg:mt-0">
            <Pie data={data} />
          </div>
        </div>

        {/* Right Side: Career Insights */}
        <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col">
          {/* Career Insights for the Highest Category */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-lg shadow-md mb-6">
            <h4 className="text-lg font-semibold">{result.details}</h4>
            <p className="text-gray-200 mt-2">{result.description}</p>
          </div>


          {/* Retake Button */}
          <button
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full mt-8 hover:shadow-md transition duration-300"
            onClick={() => navigate("/career-aptitude-test")}
          >
            <FaRedo className="mr-3" /> Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerAptitudeResultPage;
