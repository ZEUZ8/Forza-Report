import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import { useNavigate } from "react-router-dom";

const CounterCard = ({counter}) => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false);
  const [selectedName, setSelectedName] = useState(true)
  return (
    <>
      <div className="grid xl:grid-cols-2 p-5 dark:text-white" onClick={()=>navigate("/cashier")}>

        <div className="grid grid-cols-5  max-xl:pb-5">
          {/* one section showing the Counter Number eg: C1,C2,C3 */}
          <div className=" col-span-5 sm:col-span-1">
            <p className="font-medium text-3xl max-sm:pb-5 ">C{counter}</p>
          </div>

          {/* second section : showing the Names  */}
          <div className="max-md:gap-4 col-span-2 flex flex-col gap-5  ">
            <div className="grid w-full">
              <p className="text-sm font-medium py-2">Cashier Names</p>
            </div>

            <div className=" flex flex-col  font-light text-lg gap-3 tracking-wider text-gray-400 cursor-pointer ">
              <p className={`${selectedName && `font-medium text-2xl text-black dark:text-white`}  `}>
                Mohamed Sinan{" "}
              </p>
              <p className="">Mohamed Sinan </p>
              <p className="">Mohamed Sinan </p>
              <p className="">Mohamed Sinan </p>
            </div>
          </div>

          {/* third section : Counter status eg: opening balance and closing balance */}
          <div className="col-span-2 max-sm:col-start-4 flex flex-col gap-5">
            <div className="grid w-full">
              <p className="text-sm font-medium py-2">Opening Balance</p>
            </div>
            <div className=" tracking-wider">
              <p className="text-2xl font-medium">
                {" "}
                3000.00 <span className="font-medium text-sm">AED</span>
              </p>
            </div>

            <div className="grid gap-2">
              <p className="text-normal font-medium">Shift Timing</p>

              <div className="grid grid-cols-5">
                <p className="col-span-1">in</p>
                <h1 className=" col-span-4 font-medium">10:00 AM</h1>
              </div>

              <div className="grid grid-cols-5">
                <p className="col-span-1">Out</p>
                <h1 className="col-span-4 font-extralight">
                  Shift in progress
                </h1>
              </div>
            </div>

            <div className="grid">
              <p className="text-md">Closing Balance</p>
              <h1 className="text-lg font-extralight">
                Shift not Completed Yet !
              </h1>
            </div>
          </div>
        </div>

        <div>
          <DoughnutChart />
        </div>
      </div>
    </>
  );
};

export default CounterCard;
