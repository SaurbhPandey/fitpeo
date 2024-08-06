// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { color } from 'chart.js/helpers';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    datasets: [
      {
        label: '# of Votes',
        data: [12000, 19000, 3000, 5000, 2000, 3000,12000, 19000, 3000, 5000, 2000, 3000,12000, 19000, 3000, 5000, 2000, 3000], // Example data
        backgroundColor: '#7295fd', // Set the same color for all bars
        borderRadius: 10, // Apply a curve to the top edges of the bars
        borderSkipped: 'bottom', // Only the bottom edge is not curved
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart Example',
        color : 'white'
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Step size for x-axis
          max: 30, // Maximum value on x-axis
          color : 'white'
        },
      },
      y: {
        beginAtZero: true,
        max: 20000, // Set maximum y-axis value
        ticks: {
          callback: function(value) {
            return value / 1000 + 'k'; // Format y-axis labels
          },
          stepSize: 5000, // Step size for y-axis
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
