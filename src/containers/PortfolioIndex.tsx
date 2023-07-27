import React from "react";
import projects, { Project } from "@/data/projects";
import Image from "next/image";

const PortfolioIndex = () => {
  return (
    <div className="">
      {projects.map((projects: Project, index: number) => (
        <div key={index} className="mt-[50px]">
          {/* <div className="relative w-full h-auto overflow-hidden"> */}

          <Image
            src={projects.thumbnail}
            alt={projects.thumbnail}
            priority
            height={1302}
            width={1406}
          />

          {/* </div> */}

          <p className="text-customBlack mt-10">{projects.label}</p>
          <h2 className="text-customBlack mt-4 font-bold text-xl">{projects.title}</h2>
          <p className="text-customGray mt-4">{projects.description}</p>
          <div className="w-full bg-gray-200 h-[1px] mt-[30px]"></div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioIndex;
