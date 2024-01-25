import React from "react";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  const handleNavigation = (route)=>{
    navigate(`/${route}`)
  }
  return (
    <>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 mt-5 " >
        
        <div className="shadow-special rounded-xl p-4 grid grid-cols-5 items-center text-center" onClick={()=>handleNavigation("departmentreport")}>
          <div className="col-span-4  mx-auto">
            <p className="text-[#F7A500]">Sales Man Report</p>
          </div>
          <div className="grid justify-self-end items-center col-start-5 col-span-1">
            <p className="text-[#F7A500]">
              <MdArrowForward />
            </p>
          </div>
        </div>

        <div className="shadow-special rounded-xl p-4 grid grid-cols-5 items-center" onClick={()=>handleNavigation("departmentreport")}>
          <div className="col-span-4 mx-auto">
            <p className="text-[#F77300]">Sales Man Report</p>
          </div>
          <div className="grid justify-self-end items-center col-start-5 col-span-1">
            <p className="text-[#F77300]">
              <MdArrowForward />
            </p>
          </div>
        </div>

        <div className="shadow-special rounded-xl p-4 grid grid-cols-5 items-center" onClick={()=>handleNavigation("Counter")}>
          <div className="col-span-4 mx-auto">
          <p className="text-[#F70031]">Counter Report</p>
          </div>
          <div className="grid justify-self-end items-center col-start-5 col-span-1">
          <p className="text-[#F70031]">
              <MdArrowForward />
            </p>
          </div>
        </div>

        <div className="shadow-special rounded-xl p-4 grid grid-cols-5 items-center " onClick={()=>handleNavigation("departmentreport")}>
          <div className="col-span-4 mx-auto">
          <p className="text-[#9410A5]">Department Report</p>
          </div>
          <div className="grid justify-self-end items-center col-start-5 col-span-1">
          <p className="text-[#9410A5]">
              <MdArrowForward />
            </p>
          </div>
        </div>

    
      </div>
    </>
  );
};

export default Footer;
