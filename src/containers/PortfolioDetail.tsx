// components/PortfolioDetail.tsx

import React from "react";
import { Project } from "@/data/projects";
import Image from "next/image";

type PortfolioDetailProps = {
  project: Project;
};

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ project }) => {
  return (
    <div className="">
      <p>{project.label}</p>
      <h1 className="text-[60px] leading-[1] tracking-[-2px] lg:text-[80px] font-bold mt-4">
        {project.title}
      </h1>
      <div className="mt-6 h-[5px] w-14 bg-customBlack"></div>
      <p className="mt-10 text-customGray">{project.description}</p>

      <Image
        src={project.detailStatic1}
        alt={project.detailStatic1}
        width={2858}
        height={1372}
        className="mt-[40px]"
      />

      <div className="mt-[60px]">
        <h2 className="text-customGray">About</h2>
        <p className="mt-[20px] text-xl font-bold">{project.smallDescription}</p>
        <p className="mt-8 text-customGray">{project.background}</p>

        <div className="mt-8 flex font-semibold gap-8">
            <div>
            <a href={project.demoURL}>View Site</a>
            <div className="mt-[5px] h-[2px] w-24 bg-gray-200"></div>
            </div>
            <div>
            <a href={project.codeURL}>View Code</a>
            <div className="mt-[5px] h-[2px] w-24 bg-gray-200"></div>
            </div>
        </div>
      </div>

      <Image
        src={project.detailStatic3}
        alt={project.detailStatic3}
        width={2930}
        height={1802}
        className="mt-[60px]"
      />

<div className="mt-[60px] block h-[1px] w-full bg-gray-200 sm:hidden"></div>


    </div>
  );
};

export default PortfolioDetail;
