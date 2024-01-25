import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [theme,setTheme] = useState()
  const navigate = useNavigate()

  const pathname = location.pathname;
  const path = pathname.slice(1);

  return (
    <div className="flex justify-between pb-6 hover:cursor-pointer  ">
      <div className="">
        {pathname === "/" ? (
          <div className="text-lg">Home</div>
        ) : (
          <div className="grid grid-flow-col font-extralightlight items-center gap-5">
            <p className="flex items-center text-2xl pt-1" onClick={()=>navigate(-1)}><MdArrowBack /> </p>
            <p className="font-extralight text-2xl">{`${path} Report`}</p>
          </div>
        )}
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-sm text-[#FF1A1A]">Log Out</p>
        <p className="text-lg" onClick={() => setTheme((prev) => !prev)}>
          {theme ? (
            <p className="dark:text-white">
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
