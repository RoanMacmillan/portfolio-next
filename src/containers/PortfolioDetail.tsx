// components/PortfolioDetail.tsx

import React from "react";
import { Project } from "@/data/projects";
import Image from "next/image";

type PortfolioDetailProps = {
  project: Project;
};

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ project }) => {
  return (
    <div className="mx-auto mt-[50px] max-w-[1280px] customMd:mt-[133px] lg:mt-[184px]">
      <p>{project.label}</p>
      <h1 className="mt-4 text-[60px] font-bold leading-[1] tracking-[-2px] lg:text-[80px]">
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

      <div className="mt-[60px] lg:mt-[165px]">
        <h2 className="text-customGray">About</h2>
        <div className="gap-48 lg:mt-[50px] lg:flex">
          <div>
            <p className="mt-[20px] text-xl font-bold lg:mt-[0px] lg:w-[400px] lg:text-[32px] lg:leading-9">
              {project.smallDescription}
            </p>
          </div>

          <div className="lg:w-1/2">
            <p className="mt-8 leading-7 text-customGray lg:mt-[0px]">
              {project.background}
            </p>

            <div className="mt-8 flex gap-8 font-semibold">
              <div>
                <a className="group" href={project.demoURL}>
                  View Site
                  <div className="relative mt-[5px] h-[2px] w-24 bg-gray-200">
                    <div className=" absolute left-0 top-0 h-[2px] w-0 bg-customEmerald transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </a>
              </div>
              <div>
                <a className="group" href={project.codeURL}>
                  View Code
                  <div className="relative mt-[5px] h-[2px] w-24 bg-gray-200">
                    <div className=" absolute left-0 top-0 h-[2px] w-0 bg-customEmerald transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={project.detailStatic3}
        alt={project.detailStatic3}
        width={2930}
        height={1802}
        className="mt-[60px] lg:mt-[165px]"
      />

      <div className="mt-[60px] block h-[1px] w-full bg-gray-200 sm:hidden"></div>
    </div>
  );
};

export default PortfolioDetail;
