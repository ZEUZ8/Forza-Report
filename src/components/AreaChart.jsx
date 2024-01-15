// import React, { useEffect, useRef } from 'react';
// import { Chart } from 'chart.js';


// const AreaChart = () => {
//   const chartRef = useRef(null);
//   const data = [
//     { year: 2010, count: 30 },
//     { year: 2011, count: 23 },
//     { year: 2012, count: 25 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 12 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];
//   useEffect(() => {
//     if (chartRef.current) {
//       // const myChart = new Chart(chartRef.current, {
//       //   type: 'line', // Specify chart type as 'line' for area charts
//       //   data: {
//       //     labels: [/* your labels here */], // Add your labels
//       //     datasets: [
//       //       {
//       //         label: 'Dataset 1', // Add labels for each dataset
//       //         data: [2,4,2,5,7,4,7,8,4],
//       //         backgroundColor: 'rgba(255, 99, 132, 0.2)', // Add background color
//       //         borderColor: 'rgb(255, 99, 132)', // Add border color
//       //         fill: 'origin',
//       //       },
//       //       // ... other datasets with their labels, data, colors, and fill options
//       //     ],
//       //   },
//       //   options: {
//       //     plugins: {
//       //       legend: {
//       //         display: false, // Hide legend if not needed
//       //       },
//       //     },
//       //     // Add any other chart options as needed
//       //   },
//       // });
//       const ctx = chartRef.current.getContext('2d');
//       const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Adjust starting and ending points as needed
//       gradient.addColorStop(0, 'rgba(50, 205, 50, 0.8)'); // Lighter green
//       gradient.addColorStop(1, 'rgba(34, 139, 34, 0.2)'); // Darker green
//       const myChart = new Chart(chartRef.current, {
        
//         type: 'line',
//         data: {
//           labels: data.map(row => row.year),
//           datasets: [
//             {
//               showLine:false,
//               pointRadius:false,
//               label: 'Acquisitions by year',
//               data: data.map(row => row.count),
//               animation:false,
//               fill:true,
//               backgroundColor: gradient,
//               borderColor: "rgba(255, 99, 132, 1)", // Set line color
//               borderWidth: 1
//             }
//           ]
//         }
//       })

//       return () => myChart.destroy(); // Cleanup on unmount
//     }
//   }, [chartRef]);

//   return (
//     <div>
//       <canvas ref={chartRef} ></canvas>
//     </div>
//   );
// };

// export default AreaChart;


import React from 'react'

const AreaChart = () => {
  return (
    <div>
      sinan
    </div>
  )
}

export default AreaChart
