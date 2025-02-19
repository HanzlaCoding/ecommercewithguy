import React from "react";

const InDevelopment = () => {
  return (
    <>
      <div className="development w-full px-10 py-1 bg-red-600 text-white flex justify-center items-center font-[Inter]">
        <p>
          This website is made by{" "}
          <a href="#" className="text-amber-300">
            Shafi
          </a>{" "}
          &{" "}
          <a href="#" className="text-amber-300">
            Hanzla for project only.
          </a>
          <b> In Development</b>
        </p>
      </div>
    </>
  );
};

export default InDevelopment;
