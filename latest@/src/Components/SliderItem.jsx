import React from "react";
import tabPanel from "/Images/elements01.jpg";
import BannerSvg from "./BannerSvg";

const SliderItem = () => {
  return (
    <>
      <div className="slider-item shrink-0 w-full h-full overflow-hidden">
        <div className="overlay absolute p-20 flex flex-col gap-4">
          <BannerSvg />
          <h1 className="text-6xl font-bold text-[#39245F]">
            Shopping with us for <br /> better quality and the <br /> best price
          </h1>
          <p className="font-normal text-lg">
            We have prepared special discounts for you on grocery products.{" "}
            <br />
            Don't miss these opportunities...
          </p>
          <div className="button-price flex gap-5 w-fit">
            <button
              className="bg-[#634C9F] h-fit py-2 px-5 text-white font-[700] rounded-lg 
            hover:cursor-pointer"
            >
              Shop Now
            </button>
            <div className="price-1">
              <div className="price flex items-center gap-2">
                <h5 className="text-red-600 tracking-tighter text-2xl leading-6 font-['Barlow'] font-bold">
                  $0.5
                </h5>
                <del className="text-[background: #111827] font-medium text-sm font-['Barlow']">
                  $1.99
                </del>
              </div>
              <p className="font-[400] text-sm tracking-tighter text-[#6f6e7c]">
                Don't miss this limited time offer.
              </p>
            </div>
          </div>
        </div>
        <div className="image w-[100%] h-[100%]">
          <img
            className="object-contain w-[100%] h-[100%1"
            src={tabPanel}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SliderItem;
