import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRedo } from "react-icons/fa";
import { Pie } from "react-chartjs-2";

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no state is present, redirect back to the test
  if (!state) {
    navigate("/");
    return null;
  }

  const { totals, dominantDimension } = state;

  // Prepare data for the Pie chart
  const data = {
    labels: ["D", "I", "S", "C"],
    datasets: [
      {
        data: [totals.D, totals.I, totals.S, totals.C],
        backgroundColor: ["#F87171", "#60A5FA", "#34D399", "#FBBF24"], // Red, Blue, Green, Yellow
        hoverOffset: 4,
      },
    ],
  };

  // Some custom chart options
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    maintainAspectRatio: false,
  };

  // Simple descriptive text for each dimension (customize as you wish)
  const dimensionDescriptions = {
    D: {
      title: "Dominance (D)",
      description:
        "Assertive, decisive, and driven by results. Tends to be direct and enjoys taking charge.",
    },
    I: {
      title: "Influence (I)",
      description:
        "Sociable, enthusiastic, and loves to connect with others. Values positivity and collaboration.",
    },
    S: {
      title: "Steadiness (S)",
      description:
        "Calm, supportive, and reliable. Prefers stable environments and values harmony in relationships.",
    },
    C: {
      title: "Conscientiousness (C)",
      description:
        "Analytical, detail-oriented, and systematic. Strives for accuracy, quality, and data-driven decisions.",
    },
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white py-8 px-4 text-center">
        <h1 className="text-3xl font-bold uppercase">My DISC Results</h1>
        <p className="mt-2 text-sm">
          Your personalized breakdown of the four DISC dimensions
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-8 mt-4 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        {/* Left: Chart and summary */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Your Dominant Dimension:
            <span className="text-blue-600 ml-2">{dominantDimension}</span>
          </h2>
          <div className="w-64 h-64 relative mb-6">
          <Pie key={JSON.stringify(data)} data={data} options={options} />
          </div>

          <div className="mt-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Dimension Totals
            </h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              {Object.entries(totals).map(([dim, total]) => (
                <li key={dim}>
                  <span className="font-bold">{dim}:</span> {total}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Explanations */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            What does this mean?
          </h3>
          {Object.keys(totals).map((dim) => {
            const info = dimensionDescriptions[dim];
            return (
              <div
                key={dim}
                className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-300"
              >
                <h4 className="text-lg font-bold text-blue-800">
                  {info.title}
                </h4>
                <p className="text-gray-700 text-sm mt-1">{info.description}</p>
              </div>
            );
          })}
          <button
            className="flex items-center bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
            onClick={() => navigate("/DISCPersonalityTest")}
          >
            <FaRedo className="mr-2" /> Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
