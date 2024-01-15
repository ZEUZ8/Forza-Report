import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-row-7 grid-flow-col gap-5 ">
        <div className="shadow-special col-span-3  rounded-xl p-6">
            <p>Receipts</p>
            <p></p>
        </div>

        <div className="shadow-special col-span-3 rounded-xl">
            <p className="">Today Discount</p>
            <p></p>
        </div>
        <div className="shadow-special col-span-1 rounded-xl">
            <p className="">Purchase</p>
            <p></p>
        </div>
      </div>
      <div className="grid grid-row-7 grid-flow-col gap-5 ">
        <div className="shadow-special col-span-3  rounded-xl p-6">
            <p>Receipts</p>
            <p></p>
        </div>
        
        <div className="shadow-special col-span-3 rounded-xl">
            <p className="">Today Discount</p>
            <p></p>
        </div>
        <div className="shadow-special col-span-1 rounded-xl">
            <p className="">Purchase</p>
            <p></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
