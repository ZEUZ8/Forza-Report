import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js correctly

const AreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'line', // Specify chart type as 'line' for area charts
        data: {
          labels: [/* your labels here */], // Add your labels
          datasets: [
            {
              label: 'Dataset 1', // Add labels for each dataset
              data: [2,4,2,5,7,4,7,8,4],
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Add background color
              borderColor: 'rgb(255, 99, 132)', // Add border color
              fill: 'origin',
            },
            // ... other datasets with their labels, data, colors, and fill options
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false, // Hide legend if not needed
            },
          },
          // Add any other chart options as needed
        },
      });

      return () => myChart.destroy(); // Cleanup on unmount
    }
  }, [chartRef]);

  return (
    <div>
      <canvas ref={chartRef} ></canvas>
    </div>
  );
};

export default AreaChart;
