import React from "react";



const Hero = () => {
  return (
    <div className="mt-[50px] lg:mt-[100px] lg:max-w-[1280px] mx-auto relative customMd:mt-[133px]">
      <h1 className="font-light text-[60px] leading-[1] tracking-[-2px] lg:text-[80px]">Check<br></br>My<br className="lg:hidden"></br><span className="font-bold lg:ml-[10px]">Portfolio</span></h1>
      <div className="h-[5px] w-14 bg-customBlack mt-6" ></div>
      <div className="h-[1850px] hidden customXL:block w-[1px] bg-gray-200 absolute inset-0 mx-auto"></div>
    </div>
  );
};

export default Hero;
