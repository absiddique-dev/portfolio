import React from "react";

const BoxCircle = () => {
  return (
    <div className="w-full h-[700px] flex items-center justify-center relative">
      <div className="w-[700px] h-[700px] rounded-full  bg-[#45cfc81c] blur-2xl relative"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-[#ffffff96] m-auto flex items-center justify-center text-center">
        <h1 className="text-[75px] tracking-wide leading-tight text-white font-bold text-nowrap">
          10+ YEARS OF <br /> EXPERIENCE IN <br />
          WEB DEVELOPMENT
        </h1>
      </div>
      <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-[#ffffff96] m-auto z-[13]"></div>
      <div className="absolute w-[30px] h-[30px] rounded-full bg-green-500"></div>
    </div>
  );
};

export default BoxCircle;
