
import ReactApexChart from "react-apexcharts";
import { salesChartData1 } from "../assets/sales";

const ApexArea = () => {
  const series = [
    {
      name: "time",
      data: salesChartData1,
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 300,
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Hourly Sales",
      align: "center",
      style: {
        fontSize: "22px",
        fontWeight: "Bold",
        color: "#263238",
      },
    },
    toolbar: {
      show: false,
    },
    yaxis: {
      show: true,
      min: 0,
      max: 3000,
      tickAmount: 3,
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      // title: {
      //   text: "Price",
      //   offsetX: 30,
      //   offsetY: -190,
      //   rotate: 0,
      //   style: {
      //     fontSize: "16px",
      //     fontFamily: "Helvetica, Arial, sans-serif",
      //     fontWeight: 600,
      //     cssClass: "apexcharts-yaxis-title",
      //   },
      // },
    },
    xaxis: {
      type: "datetime",
      tickAmount: 8,
      labels: {
        formatter:(value) => {
          // Convert x-axis values (milliseconds) to hours and format label
          const date = new Date(value);
          const hours = date.getHours();
          return hours % 12 === 0 ? "12am" : `${hours % 12}am`;
        },
        style: {
          fontSize: "12px",
          fontWeight: 500,
        },
      },
      // title: {
      //   text: "hours",
      //   offsetX: 600,
      //   offsetY: -21,
      //   style: {
      //     fontSize: "16px",
      //     fontFamily: "Helvetica, Arial, sans-serif",
      //     fontWeight: 600,
      //     cssClass: "apexcharts-yaxis-title",
      //   },
      // },
      axisTicks: {
        enable: false,
      },
      axisBorder:{
        show:false
      },
      axisTicks:{
        show:false
      },
      offsetX: 5,
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 20,
      },
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 30,
            color: "#22FF33 ",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#99ff99", // Set the starting color to green
            opacity: 0.1,
          },
        ],
      },
    },
    selection: "one_year",
    stroke: {
      width: 0,
      curve: "smooth",
      lineCap: "round",
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          colors: ["#00E396"],
        },
      },
    },
  };
  return (
    <div id="chart-timeline bg-green-500">
     <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
        width={"100%"}
      />
    </div>
  );
};

export default ApexArea