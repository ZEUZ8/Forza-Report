// import React, { useEffect, useRef, useState } from "react";
// import * as echarts from "echarts";
// import { BarChart } from "echarts/charts";
// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
// } from "echarts/components";

// import { LabelLayout, UniversalTransition } from "echarts/features";

// import { CanvasRenderer } from "echarts/renderers";

// echarts.use([
//   BarChart,
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
//   LabelLayout,
//   UniversalTransition,
//   CanvasRenderer,
// ]);

// const AreaChart = () => {
//   const chartRef = useRef(null);
//   const [data,setData] = useState([2000,4000,6000,8000,1000,1200,1400])
//   const [labelData,setLabelData] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])

//   useEffect(() => {
//     if (chartRef.current) {
//       const myChart = echarts.init(chartRef.current);
//       echarts.use([
//         BarChart,
//         TitleComponent,
//         TooltipComponent,
//         GridComponent,
//         DatasetComponent,
//         TransformComponent,
//         LabelLayout,
//         UniversalTransition,
//         CanvasRenderer,
//       ]);

//       myChart.setOption({
//         grid: {
//           containLabel: false,
//         },
//         title: {
//           text: 'Hourly Sales', // Replace with your desired heading
//           padding:20,
//           left: 'center', // Position (optional, defaults to 'left')
//           top: 'top', // Position (optional, defaults to 'top')
//           textStyle: {
//             fontSize: 20, // Adjust font size as needed
//           },
//         },
//         xAxis: {
//           type: 'category',
//           data: labelData,
//           boundaryGap:false,
//           grid: {
//             show: false, // Hide grid lines, but keep axis line
//           },
//           axisLine: {
//             show: false, // Show the x-axis line
//           },
//           axisLabel: {
//             padding: [4, 0, 4, 15] // 4 pixels padding on top and bottom, 0 on left, 15 on right
//           },
//           axisTick: {
//             show: false
//           },
//         },
//         yAxis: {
//           splitLine: {
//             show: false, // Hide y-axis grid lines
//           },
//           series: [
//             {
//               data: data,
//             }
//           ],
//           axisLabel: {
//             padding: [4, 0, 4, 15] // 4 pixels padding on top and bottom, 0 on left, 15 on right
//           },
//           type: 'value'
//         },
//         series: [
//           {
//             data: data,
//             type: 'line',
//             areaStyle: {},
//             showSymbol: false,
//             markLine: {
//               data: [[{ x: 1 }, { x: 1, silent: true }], // Vertical break at x-axis value 1
//                       [{ x: 4 }, { x: 4, silent: true }], // Break at x-axis value 4
//                       // ... define additional break points
//                      ],
//               symbol: 'none', // Hide the marker symbol
//             },
//             lineStyle: {
//               color: 'rgba(0, 255, 56, .5)', // Adjust color as desired
//               width: 2,
//             },
//             areaStyle: {
//               color: {
//                 type: 'linear',
//                 x: 0.5, // Fixed position
//                 y: 0, // Top of the area
//                 x2: 0.5, // Fixed position
//                 y2: 1, // Bottom of the area
//                 colorStops: [
//                   {
//                     offset: 0,
//                     color: 'rgba(0, 255, 56, 2)' // Green at top
//                   },
//                   {
//                     offset: 1,
//                     color: 'rgba(0, 255, 56, 0)' // Fades to gray at bottom
//                   }
//                 ]
//               }
//             }
//           }
//         ]
//       });
//     }
//   }, [data]);
//   return (
//     <div>
//       <div
//         id="main"
//         className="bg-green- p-1 rounded-lg"
//         style={{ height: "350px" }}
//         ref={chartRef}
//       ></div>
//     </div>
//   );
// };

// export default AreaChart;
