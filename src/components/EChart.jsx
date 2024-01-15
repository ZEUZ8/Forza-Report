// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const EChart = () => {
//   const customCenterValue = 'Cash'; // Set your custom value here
//   const Amount = `900 AED`

//   const option = {
//     tooltip: {
//       trigger: 'none',
//     },
//     // legend: {
//     //   top: '5%',
//     //   left: 'center',
//     // },
//     series: [
//       {
//         name: 'Collection Distribution',
//         type: 'pie',
//         radius: ['40%', '70%'],
//         avoidLabelOverlap: false,
//         itemStyle: {
//           borderRadius: 10,
//           borderColor: '#fff',
//           borderWidth: 2,
//         },
//         label: {
//           show: false,
//           position: 'center',
//         },
//         emphasis: {
//           label: {
//             show: false, // Hide the label on hover
//             fontSize: 15, // Adjust other properties as needed
//             fontWeight: 'bold',
//           },
//         },
//         // labelLine: {
//         //   show: false,
//         // },
//         data: [
//           { value: 1048, name: 'Search Engine' },
//           { value: 735, name: 'Direct' },
//           { value: 580, name: 'Email' },
//           { value: 484, name: 'Union Ads' },
//           { value: 300, name: 'Video Ads' },
//         ],
//         center: ['50%', '50%'], // Center of the chart
//         label: {
//           show: true,
//           position: 'center',
//           formatter: function (params) {
//             return `{a|${customCenterValue}}\n{b|${Amount}}`;
//           },
//           rich: {
//             a: {
//               fontSize: 14,
//               lineHeight: 16,
//               color: 'black', // Style for the first line
//             },
//             b: {
//               fontSize: 20,
//               lineHeight: 24,
//               color: 'black', // Style for the second line
//             },
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactECharts option={option} style={{ height: '300px', width: '100%' }} />
//     </div>
//   );
// };

// export default EChart;
