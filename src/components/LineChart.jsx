import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart elements and scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data in the desired format
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Earnings',
        data: [
          0, 10000, 5000, 15000, 10000, 20000,
          15000, 25000, 20000, 30000, 25000, 40000
        ],
        lineTension: 0.3,
        backgroundColor: 'rgba(78, 115, 223, 0.05)',
        borderColor: 'rgba(78, 115, 223, 1)',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
        pointBorderColor: 'rgba(78, 115, 223, 1)',
        pointHoverRadius: 3,
        pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
        pointHitRadius: 10,
        pointBorderWidth: 2,
      },
    ],
  };

  
  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        bottom: 0,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} style={{ width: '90%', height: '90%', marginTop: '0' }} />
    </div>
  );
};

export default LineChart;
