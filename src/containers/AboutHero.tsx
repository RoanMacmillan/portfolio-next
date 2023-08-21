import React from "react";

const AboutHero = () => {
  return (
    <div className="relative  mx-auto mt-[50px] px-6 customMd:mt-[133px] customMd:px-20 lg:mt-[184px] lg:max-w-[1440px]">



      <h1 className="text-[60px] font-light leading-[1] tracking-[-2px] lg:text-[80px]">
        Frontend<br></br>
        <span className="font-bold">Developer</span>
        <div className="mt-6 h-[5px] w-14 bg-customBlack"></div>
      </h1>

      <div className="mt-[50px]">
        <h2 className="text-3xl font-bold">About me</h2>
        <p className="mt-4 max-w-[550px] text-customGray text-[15px]">
          Hi, I'm Roan Macmillan. I'm a frontend developer looking for a new
          role. I'm based in Edinburgh and open to working remotely.
        </p>
        <p className="mt-[30px] font-semibold">Read More</p>
        <div className="mt-[5px] h-[2px] w-24 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default AboutHero;
