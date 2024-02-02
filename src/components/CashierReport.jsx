import React, { useEffect, useState, useMemo, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { IoIosArrowForward } from "react-icons/io";
import { AppContext } from "../context/AppProvider";

const CashierReport = () => {
  const { theme } = useContext(AppContext);

  const [amount, setAmount] = useState(900);
  const Labels = useMemo(
    () => ["GooglePay", "CreditCard", "Credit", "Cash"],
    []
  );
  const colors = useMemo(
    () => ["#23ccd1", "#a7236f", "#f56c40", "#f7dc67"],
    []
  );

  const data = {
    //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: Labels,
        data: [2, 9, 3, 5],
        backgroundColor: colors,
        borderWidth: 7,
        borderColor: theme === "dark" ? "black" : "white",
        borderRadius: 12,
        cutout: 70,
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label[context.dataIndex];
            const value = context.parsed;
            return `  ${label} : ${value}`;
          },
        },
      },
    },
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        // First Line
        ctx.restore();
        var fontSize1 = (height / 220).toFixed(2);
        ctx.font = fontSize1 + "em sans-serif";
        ctx.fillStyle = theme === "dark" ? "white" : "black";
        ctx.textBaseline = "center";
        var text1 = "Cash",
          textX1 = Math.round((width - ctx.measureText(text1).width) / 2),
          textY1 = height / 2 - 20; // Adjust Y position for the first line
        ctx.fillText(text1, textX1, textY1);

        // Second Line
        var fontSize2 = (height / 220).toFixed(2);
        ctx.font = fontSize2 + "em sans-serif";
        ctx.fillStyle = theme === "dark" ? "white" : "black";
        var text2 = `${amount}\nAED`,
          textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
          textY2 = height / 2 + 10; // Adjust Y position for the second line
        ctx.fillText(text2, textX2, textY2);

        ctx.save();
      },
    },
  ];

  const [counters, setCounters] = useState([1, 2]);
  return (
    <>
      <div className="xl:flex ">
        
        <div className="w-[100%] xl:w-[20%]">

          <div className="  flex flex-col gap-2 ">
            <div className="">
              <p className="text-sm font-medium py-2 text-black dark:text-white">Cashier Names</p>
            </div>

            <div className="w-[100%] flex flex-row flex-nowrap xl:flex-col  font-light text-lg gap-3 tracking-wider text-gray-400 cursor-pointer p-1 max-xl:pb-4 overflow-auto scrollbar-hide">

              <div className="flex gap-3 xl:gap-5 items-center">
                <p
                  className={`text-md md:text-[1.3rem] justify-between  font-[500] text-black dark:text-white flex items-center`}
                >
                  Mohamed Sinan{" "}
                </p>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>{" "}
              </div>
              <div className="flex gap-3 xl:gap-5 items-center">
                <p
                  className={`text-[1.3rem] justify-between  font-[250] text-black dark:text-white flex items-center`}
                >
                  Mohamed Sinan{" "}
                </p>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>{" "}
              </div>
              <div className="flex gap-3 xl:gap-5 items-center">
                <p
                  className={`text-[1.3rem] justify-between  font-[250]  text-black dark:text-white flex items-center`}
                >
                  Mohamed Sinan{" "}
                </p>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>{" "}
              </div>
              
        
              
            </div>
          </div>
          
        </div>

        <div className=" p-2 w-full max-md:grid md:flex md:gap-5 justify-center ">
          <div className=" xl:w-[30rem] w-full grid grid-cols-10 pt-5  ">
            <div className="col-span-5 max-sm:col-span-10">
              <p className="pb-5 text-sm font-medium text-black dark:text-white">Counter Worked on</p>
              <h1 className="text-2xl font-medium pb-2 text-black dark:text-white">C1</h1>
              <h1 className="text-2xl font-medium text-black dark:text-white">C2</h1>
            </div>

            <div className="col-span-5 max-sm:col-span-10 max-sm:text-center">
              <div className="col-span-2 flex flex-col gap-5">
                <div className="grid w-full">
                  <p className="text-sm font-medium pb-2 text-black dark:text-white">Opening Balance</p>
                  <p className="text-2xl font-medium">
                    {" "}
                    3000.00 <span className="font-medium text-sm text-black dark:text-white">AED</span>
                  </p>
                </div>
                {/* <div className=" tracking-wider">
                </div> */}

                <div className="grid gap-5">
                  <p className="text-normal font-medium text-black dark:text-white">Shift Timing</p>

                  <div className="grid grid-cols-5">
                    <div className="col-span-1">
                      <h1 className=" w-fit text-black dark:text-white">C1</h1>
                    </div>

                    <div className="col-span-4 grid gap-2">
                      <div className="grid grid-cols-5">
                        <p className="col-span-1 text-black dark:text-white">in</p>
                        <h1 className=" col-span-4 font-medium text-black dark:text-white">10:00 AM</h1>
                      </div>

                      <div className="grid grid-cols-5">
                        <p className="col-span-1">Out</p>
                        <h1 className="col-span-4 font-medium text-black dark:text-white">07:00 PM</h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="grid">
                  <p className="text-md">Closing Balance</p>
                  <h1 className="text-lg font-extralight">
                    Shift not Completed Yet !
                  </h1>
                </div> */}

                <div className="grid w-full">
                  <p className="text-md font-medium pb-2 text-black dark:text-white">Closing Balance</p>
                  <p className="text-lg font-extralight text-black dark:text-white">
                    {" "}
                    Shift not Completed Yet !
                  </p>
                </div>

                <div className="grid grid-cols-5">
                  <div className="col-span-1">
                    <h1 className=" w-fit text-black dark:text-white">C2</h1>
                  </div>

                  <div className="col-span-4 grid gap-5">
                    <div className="grid grid-cols-5">
                      <p className="col-span-1 text-black dark:text-white">in</p>
                      <h1 className=" col-span-4 font-medium text-black dark:text-white">10:00 AM</h1>
                    </div>

                    <div className="grid grid-cols-5">
                      <p className="col-span-1 text-black dark:text-white">Out</p>
                      <h1 className="col-span-4 font-medium text-black dark:text-white">07:00 PM</h1>
                    </div>
                  </div>
                </div>

                <div className="grid w-full">
                  <p className="text-md font-medium pb-2 text-black dark:text-white">Closing Balance</p>
                  <p className="text-2xl font-medium ">
                    {" "}
                    3000.00 <span className="font-medium text-sm text-black dark:text-white">AED</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[20rem] max-md:pt-5  text-center rounded-2xl">
            <div className=" shadow-special dark:shadow-special2 rounded-xl p-5 grid justify-center ">
              <div className="grid grid-rows-2 gap-2">
                <div className="grid grid-rows-2  px-2">
                  <div className="flex items-start ">
                    <p className="text-lg font-medium ">
                      Collection distribution today
                    </p>
                  </div>

                  <div className="text-start">
                    <p className="text-sm">Total amount</p>
                    <h1 className="text-2xl font-medium">
                      365.61 <span className="font-light">AED</span>
                    </h1>
                  </div>
                </div>
                <div className=" grid grid-cols-2 grid-flow-row px-2 h-[60%] ">
                  {Labels.map((label, i) => {
                    return (
                      <div class="flex items-center gap-4">
                        <div
                        style={{backgroundColor:colors[i]}}
                          className={` chumma w-4 h-4 border rounded  `}
                        ></div>
                        <p>{label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className={`w-[100%] h-[260px]  grid justify-items-center`}
              >
                <Doughnut data={data} options={options} plugins={plugins} />
              </div>
            </div>
          </div>

          {/* <div className="col-span-3 grid grid-cols-7">
            <div className="col-start-3 col-span-5 grid grid-cols-2   ">
              <div className="">
                <h1 className="pb-2">Counter Worked on</h1>
                <div >
                {counters.map((count) => {
                  return (
                    <>
                      <div className="pt-4">
                        <p className="font-medium text-3xl  bg-green-50">C{count}</p>
                      </div>
                    </>
                  );
                })}
                </div>
              </div>
              <div className="self-row-end">nan</div>
            </div>
          </div>

          <div className="bg-purple-200 col-span-3">the whole dat</div> */}
        </div>
      </div>
    </>
  );
};

export default CashierReport;
