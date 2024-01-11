import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const Doughnut = () => {
  const chartRef = useRef(null);
  const [labels, setLabels] = useState([
    "GooglePay",
    "CreditCard",
    "Credit",
    "Cash",
  ]);
  const colors = ["#23ccd1","#a7236f","#f56c40","#f7dc67"]

  useEffect(() => {
    // Chart configuration
    const config = {
      type: "doughnut",

      data: {
        //   labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: labels,
            data: [300,50,100,70],
            backgroundColor: colors,
            borderColor: ["transparent", "transparent", "transparent"],
            borderRadius: 10,
            borderAlign: "inner",
            hoverOffset: 4,
            cutoutPercentage: 50,
          },
        ],
      },
    };

    const myChart = new Chart(chartRef.current, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="text-black w-full flex max-sm:flex-col p-5 rounded-2xl  shadow-special  mr-1">
      <div className="w-1/2 max-sm:w-full p-2 flex  flex-col justify-evenly gap-3">
        <div className="grid gap-2"> 
          <h2>Collection distribution</h2>
          <p className="pt-5">Total Amount</p>
          <div className="inline">
            <h1 className="text-2xl font-medium inline">365.61</h1>{" "}
            <span className="text-̦2xl inline font-normal">AED</span>
          </div>
          <div className=" gap-4 grid grid-cols-2 text-xs text-start ">
            {labels.map((label,i) => {
              return <div className="flex items-center " key={label}><div className={`w-3 h-3 rounded border  bg-[${colors[i]}]`}></div> {label}</div>;
            })}
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-1/2 max-sm:w-fit relative flex items-center aspect-square ">
        <canvas className="w-250px h-250px" ref={chartRef}></canvas>
        <div className="absolute top-0  text-center w-full grid place-content-center h-full">
          <p>Cash</p>
          <p>900 AED</p>
        </div>
      </div>
    </div>
  );
};

export default Doughnut;
