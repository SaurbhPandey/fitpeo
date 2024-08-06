import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components for Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: "Sales Data",
        data: [70, 30], // Added background slice
        backgroundColor: [
          "rgb(114,149,253)",
          "rgba(0, 0, 0, 0.1)", // Light color for the background slice
        ],
        hoverOffset: 4,
        borderRadius: 2, // Adjust this value for more or less rounding
        borderWidth: 1, // Adjust border width for better visibility
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive to container size
    maintainAspectRatio: false, // Allow for custom aspect ratio
    cutout: "70%", // Adjust the doughnut thickness
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  };

  return (
    <div style={{ width: "60px", height: "60px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
