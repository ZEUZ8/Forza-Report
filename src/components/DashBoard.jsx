import React from "react";
import Cards from "./Cards";
import Doughnut from "./Doughnut";
import AreaChart from "./AreaChart";

const DashBoard = () => {
  return (
    <div className="grid max-w-[100%] xl:grid-cols-2 gap-4 ">
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-4">
          <div className="grid gap-4 max-w-[100%]">
            <Cards title={"Today Sale"} amount={30000.0} percentage={8} />
            <Cards title={"Cash In Hand"} amount={30000.0} />
          </div>
          <div className="grid gap-4">
            <Cards title={"Purchase"} amount={30000.0} percentage={8} />

            <Cards title={"Net Profit"} amount={30000.0} />
          </div>
          <div className="grid lg:grid-row-3 max-xl:grid-cols-2 max-xl:col-span-2 gap-4 max-lg:grid-cols-7">
            <div className="grid grid-cols-2 max-xl:row-span-2 gap-5 max-lg:col-span-3 text-start">
              <div className="rounded-md shadow-special grid gap-3 p-3 font-medium">
                <p>FOC</p>
                <p>09</p>
              </div>
              <div className="rounded-md shadow-special grid gap-3 p-3 font-medium">
                <p>Bills</p>
                <p>08</p>
              </div>
            </div>
            <div className="row-span-2 grid grid-row-2  justify-center shadow-special rounded-lg max-lg:col-span-4">
              <div className="p-5 grid gap-1">
                <div className="text-sm font-medium">Sales Return</div>
                <p className="text-lg text-[#F7A500] font-normal "> 30000.000 <span className="text-sm font-medium">AED</span></p>
              </div>
              <div className="p-5 grid gap-1">
                <div className="text-sm font-medium">Purchase Return</div>
                <p className="text-lg font-normal text-[#FF4D00]"> 30000.000 <span className="text-sm font-medium">AED</span></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Doughnut />
        </div>
      </div>
      <div className="grid grid-rows-2 gap-5 max-w-[100%]">
        <div className="shadow-special p-5  grid rounded-lg">
          {/* <AreaChart /> */}
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-5">
          <div className="shadow-special rounded-lg">son1</div>
          <div className="shadow-special rounded-lg">son2</div>
          <div className="shadow-special rounded-lg">son3</div>
          <div className="shadow-special rounded-lg">son4</div>

        </div>
      </div>
    </div>
  );
};

export default DashBoard;
