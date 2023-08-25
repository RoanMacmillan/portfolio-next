import React, { useState } from "react";

const AboutHero = () => {
  const handleScroll = () => {
    const scrollTarget = document.getElementById("scrollTarget");
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative  mx-auto mt-[50px] px-6 customMd:mt-[133px] customMd:px-20 lg:mt-[184px] lg:max-w-[1584px] xl:px-36">
      <h1 className="text-[60px] font-light leading-[1] tracking-[-2px] lg:text-[80px]">
        Frontend<br></br>
        <span className="font-bold">Developer</span>
        <div className="mt-6 h-[5px] w-14 bg-customBlack"></div>
      </h1>

      <div className="mt-[50px]">
        <h2 className="text-3xl font-bold">About me</h2>
        <p className="mt-4 max-w-[550px] text-[15px] text-customGray">
          Hi, I'm Roan Macmillan. I'm a frontend developer looking for a new
          role. I'm based in Edinburgh and open to working remotely.
        </p>
        <button onClick={handleScroll} className="group text-left">
          <p className="mt-[30px] font-semibold">Read More</p>
          <div className="relative mt-[5px] h-[2px] w-24 bg-gray-200">
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-customEmerald transition-all duration-300 group-hover:w-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutHero;
