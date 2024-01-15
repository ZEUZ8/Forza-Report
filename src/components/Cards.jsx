import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Cards = ({ title, amount, percentage }) => {
  return (
    <div className="shadow shadow-special rounded-xl p-3 max-w-[100%]  ">
      <p className="text-sm font-semibold text-start py-3">{title}</p>
      <p className="text-3xl text-[#9410A5] font-[340] py-3">
        {amount}.000
        <span className=" text-base font-medium text-black">AED</span>
      </p>
      {percentage && (
        <div className="flex justify-end gap-1 text-[#F00]">
          <span>
            <FaCaretDown />
          </span>
          <p className="text-end text-xs">{percentage}%</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
