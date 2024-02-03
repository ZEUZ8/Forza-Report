import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CounterCard from "./CounterCard";

const Counter = () => {
  const [counters, setCounters] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedCounters, setSelectedCounters] = useState([]);
  const [counter, setCounter] = useState([]);

  const selectCounter = (count) => {
    setCounter((prev) => {
      if (prev.includes(count)) {
        return prev.filter((item) => item !== count);
      } else {
        return [...prev, count];
      }
    });
  };


  return (
    <>
      <div className="grid gap-2 py-4 dark:text-white ">
        <p className="pl-2 text-md font-medium">Couter Number</p>
        <div className="flex flex-row gap-3 max-lg:max-w-[100%] max-w-[100%]  overflow-x-auto overflow-y-auto scrollbar-hide">
          {counters.map((count) => {
            return (
              <div
                onClick={() => selectCounter(count)}
                key={count}
                className={`${counter.includes(count) ? `dark:border-white border-blue-300 border-2 scale-90` : `border-gray-200`} bg-gray-200 dark:bg-gray-600 dark:border-black border outline-none w-[80px] max-w-[90px] max-h-[70px] p-4 text-2xl text-center text-slate-700 
                rounded-2xl shadow-inner bg-opacity-80 dark:text-white dark:hover:border-white focus:outline-none active:border-blue-400  focus:ring focus:ring-blue-200  hover:scale-90 cursor-pointer`}
              >
                <h1>C{count}</h1>
              </div>
            );
          })}
        </div>
      </div>

      {counter.length > 0  ? (
        <>
          <div className=" overflow-auto flex-1  scrollbar-hide cursor-pointer">
            {[...counter].reverse().map((counter, i) => {
              console.log(i,' the globla in the state')
              return (
                <>
                  <div className="">
                    <CounterCard counter={counter} />
                  </div>
                  { counter.length !== 1 && (
                    <hr class="h-px  bg-gray-400 dark:bg-gray-100 border-0"></hr>
                  )}
                </>
              );
            })}
          </div>
        </>
      ) : (
        <div className=" h-[100vh] grid items-center justify-center">
          <img src="/imgs/empty.png" alt="empty image" />
        </div>
      )}
    </>
  );
};

export default Counter;
