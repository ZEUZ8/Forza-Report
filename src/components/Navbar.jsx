import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { AppContext } from "../context/AppProvider";

const Navbar = ({page}) => {

  const {theme,toggleTheme} = useContext(AppContext)
  const navigate = useNavigate()


  return (
    <div className="flex justify-between pb-6  items-start ">
      <div className="">
        {page === "Home" ? (
          <div className="text-lg text-black dark:text-white hover:cursor-pointer">Home</div>
        ) : (
          <div className="grid grid-flow-col font-extralightlight items-center gap-5">
            <p className="flex items-center text-2xl pt-1 text-black dark:text-white" onClick={()=>navigate(-1)}><MdArrowBack /> </p>
            <p className="font-extralight text-2xl text-black dark:text-white">{page}</p>
          </div>
        )}
      </div>
      <div className="flex gap-5 items-center ">
        <p className="text-sm text-[#FF1A1A] hover:cursor-pointer">Log Out</p>
        <p className="text-lg hover:cursor-pointer" onClick={toggleTheme}>
          {theme !== "light"  ? (
            <p className="dark:text-white text-black">
              {" "}
              <FaMoon />
            </p>
          ) : (
            <LuSun />
          )}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
