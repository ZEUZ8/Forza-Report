import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CounterCard from "./CounterCard";

const Counter = () => {
  const [counters, setCounters] = useState([1, 2, 3, 4, 5, 6]);
  const [counter, setCounter] = useState(counters[0]);

  return (
    <>
        <div className="grid gap-2 py-4">
          <p className="pl-2 text-md font-medium">Couter Number</p>
          <div className="flex flex-row gap-3 max-w-[90%]  overflow-x-auto overflow-y-auto scrollbar-hide ">
            {counters.map((count) => {
              return (
                <div
                  key={count}
                  className={`bg-gray-200 border outline-none w-[80px] max-w-[90px] max-h-[70px] p-4 text-2xl text-center text-slate-700 rounded-2xl shadow-inner bg-opacity-80 dark:text-white hover:border-blue-400 hover:border-4`}
                >
                  <h1>C{count}</h1>
                </div>
              );
            })}
          </div>
        </div>

      <div className=" overflow-auto scrollbar-hide">
        {counters.map((counter,i) => {
          return (
            <>
              <div className="overflow-auto">
                <CounterCard  counter={counter} />
              </div>
              {i !== counters.length-1 && <hr class="h-px  bg-gray-400 border-0 dark:bg-gray-700"></hr>}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Counter;
