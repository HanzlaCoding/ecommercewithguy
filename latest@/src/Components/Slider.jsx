import React from "react";
import SliderItem from "./SliderItem";

const Slider = () => {
  return (
    <>
      <div className="slider w-[100%] mt-10 h-[80%] relative flex flex-nowrap items-center">
        <SliderItem/>
      </div>
    </>
  );
};

export default Slider;
