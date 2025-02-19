import React, { use, useEffect, useRef, useState } from "react";
import Timer from "./Timer";
const Header_timer = () => {
  const header_para_sale =
    "FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.";
  const sale = "Until the end of the sale:";
  return (
    <>
      <header className="header w-full h-[15vh] capitalize font-medium text-sm font-[Inter]">
        <div className="h-1/2 w-full flex justify-between bg-[#634C9F]">
          <div className="container w-full h-full flex mx-auto">
            <div className="w-1/2 h-full flex items-center justify-between text-white">
              {header_para_sale}
            </div>
            <div className="w-1/2 h-full flex">
              <div className="w-[40%] text-[#f2f2f2] h-full flex items-center justify-end">
                {sale}
              </div>
              <div className="w-[60%] h-full text-white flex items-center justify-center">
                <Timer />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2 w-full flex">
          <div className="container flex mx-auto h-full w-full">
            <div className="w-[25%] h-full">
              <ul className="flex w-full h-full items-center justify-evenly">
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">my accounts</a>
                </li>
                <li className="border-r-2 pr-2">
                  <a href="#">wishlist</a>
                </li>
              </ul>
            </div>
            <div className="h-full w-[50%] flex items-center">
              <p className="text-[#6B7280]">
                We deliver to you every day from{" "}
                <span className="text-[#EA580C]"> 7:00 to 23:00 </span>
              </p>
            </div>
            <div className="w-[25%] h-full">
              <ul className="flex w-full h-full items-center justify-evenly">
                <li>
                  <a href="#">english</a>
                </li>
                <li>
                  <a href="#">USD</a>
                </li>
                <li>
                  <a href="#">order tracking</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header_timer;
