import React from "react";

const Hero = () => {
  return (
    <div className={`relative mx-auto mt-[50px] customMd:mt-[133px] lg:mt-[184px] lg:max-w-[1280px] `}>
      <h1 className="text-[60px] font-light leading-[1] tracking-[-2px] lg:text-[80px]">
        Check<br></br>My<br className="lg:hidden"></br>
        <span className="font-bold lg:ml-[10px]">Portfolio</span>
      </h1>
      <div className="mt-6 h-[5px] w-14 bg-customBlack"></div>
      <div className="absolute inset-0 mx-auto hidden h-[1850px] w-[1px] bg-gray-200 customXL:block"></div>
    </div>
  );
};

export default Hero;
